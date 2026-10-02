/* Servidor estático mínimo para desarrollo local (no se despliega). */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = process.env.PORT || 4188;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".svg": "image/svg+xml",
  ".json": "application/json", ".ico": "image/x-icon",
  ".webp": "image/webp", ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/") p = "/index.html";
    const file = path.join(ROOT, p);
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end("404"); }
      const type = TYPES[path.extname(file)] || "application/octet-stream";
      // Rangos de bytes: necesarios para el video (Safari y saltos en la línea de tiempo)
      const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || "");
      if (m) {
        const start = m[1] ? +m[1] : data.length - +m[2];
        const end = m[1] && m[2] ? Math.min(+m[2], data.length - 1) : data.length - 1;
        res.writeHead(206, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Range": `bytes ${start}-${end}/${data.length}`, "Content-Length": end - start + 1 });
        return res.end(data.subarray(start, end + 1));
      }
      res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes" });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`ALAMBIC dev en http://localhost:${PORT}`));
