/* ============================================================
   ALAMBIC · Inicio (colección destacada, servicios, testimonios, FAQ)
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.addEventListener("DOMContentLoaded", () => {
    const A = window.ALAMBIC;
    const D = A.data;

    /* ---------- Colección destacada ---------- */
    const feat = $("#featGrid");
    if (feat) {
      feat.innerHTML = ["lavanda", "romero", "naranja"].map((id) => A.card(A.findProduct(id))).join("");
      A.bindCards(feat);
    }

    /* ---------- Servicios ---------- */
    const srv = $("#srvGrid");
    if (srv) {
      srv.innerHTML = D.servicios.map((s, i) => `
        <article class="srv reveal" style="transition-delay:${i * 90}ms">
          <div class="srv-media"><img src="${s.img}" alt="${s.nombre}" loading="lazy" /></div>
          <div class="srv-body">
            <span class="srv-num">0${i + 1}</span>
            <h3>${s.nombre}</h3>
            <p>${s.desc}</p>
            ${s.disponible
              ? `<a class="link-arrow" href="${A.waLink(`¡Hola Alambic! Me interesa *${s.nombre}*. ¿Me cuentas más?`)}" target="_blank" rel="noopener">Quiero saber más</a>`
              : `<span class="tag-soon">Próximamente</span>`}
          </div>
        </article>`).join("");
    }

    /* ---------- Testimonios ---------- */
    const tst = $("#tstGrid");
    if (tst) {
      tst.innerHTML = D.testimonios.map((t) => `
        <figure class="tst reveal">
          <span class="tst-mark" aria-hidden="true">“</span>
          <blockquote>${t.texto}</blockquote>
          <figcaption>${t.autor} <span>· ${t.ciudad}</span></figcaption>
        </figure>`).join("");
    }

    /* ---------- FAQ ---------- */
    const faq = $("#faqList");
    if (faq) {
      faq.innerHTML = D.faq.map((f, i) => `
        <div class="faq-item">
          <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">${f.q}<span class="plus" aria-hidden="true"></span></button>
          <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><p>${f.a}</p></div>
        </div>`).join("");
      faq.addEventListener("click", (e) => {
        const q = e.target.closest(".faq-q");
        if (!q) return;
        const item = q.parentElement;
        const open = item.classList.contains("open");
        $$(".faq-item", faq).forEach((i) => {
          i.classList.remove("open");
          $(".faq-q", i).setAttribute("aria-expanded", "false");
          $(".faq-a", i).style.maxHeight = null;
        });
        if (!open) {
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
          const a = $(".faq-a", item);
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    }

    A.observe?.();

    /* ---------- Video del hero: pausa fuera de pantalla ---------- */
    const video = $(".hero-video");
    if (video) {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) { video.removeAttribute("autoplay"); video.pause(); }
      else {
        new IntersectionObserver(([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause())).observe(video);
      }
    }
  });
})();
