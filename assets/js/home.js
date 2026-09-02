/* ============================================================
   ALAMBIC · Home (hero premium + secciones)
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.addEventListener("DOMContentLoaded", () => {
    const A = window.ALAMBIC;
    const D = window.ALAMBIC_DATA;

    /* ---------- Galería destacada (enlaza a la tienda) ---------- */
    const feat = $("#featGallery");
    if (feat) {
      const picks = [D.aceites[1], D.aceites[4], D.rollons[0], D.aceites[0]]; // lavanda, naranja, roll romero, romero
      feat.innerHTML = picks.map((p) => `
        <a class="feat-item" href="tienda.html">
          <img src="${p.img}" alt="${p.nombre}" loading="lazy" />
          <div class="feat-cap"><span>${p.tag}</span><strong>${p.nombre}</strong></div>
        </a>`).join("");
    }

    /* ---------- Experiencias ---------- */
    const exp = $("#expGrid");
    if (exp) {
      exp.innerHTML = D.experiencias.map((e) => `
        <article class="exp-card">
          <div class="exp-media"><img src="${e.img}" alt="${e.nombre}" loading="lazy" /></div>
          <div class="exp-body">
            <h3>${e.nombre}</h3>
            <p>${e.desc}</p>
            ${e.disponible
              ? `<a class="btn btn-gold btn-sm" href="${A.waLink(`¡Hola ALAMBIC! 🌿 Me interesa la experiencia *${e.nombre}*. ¿Me das más información?`)}" target="_blank" rel="noopener">Quiero saber más</a>`
              : `<span class="exp-soon">Próximamente</span>`}
          </div>
        </article>`).join("");
    }

    /* ---------- Testimonios ---------- */
    const tst = $("#tstGrid");
    if (tst) {
      tst.innerHTML = D.testimonios.map((t) => `
        <blockquote class="tst">
          <div class="stars">★★★★★</div>
          <p>${t.texto}</p>
          <div class="who">${t.autor} — ${t.ciudad}</div>
        </blockquote>`).join("");
    }

    /* ---------- FAQ ---------- */
    const faqList = $("#faqList");
    if (faqList) {
      faqList.innerHTML = D.faq.map((f) => `
        <div class="faq-item">
          <button class="faq-q">${f.q}<span class="plus"></span></button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join("");
      $$(".faq-item").forEach((item) => {
        const q = $(".faq-q", item);
        const a = $(".faq-a", item);
        q.addEventListener("click", () => {
          const open = item.classList.contains("open");
          $$(".faq-item").forEach((i) => { i.classList.remove("open"); $(".faq-a", i).style.maxHeight = null; });
          if (!open) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
        });
      });
    }

    /* ---------- Hero: motes de luz + parallax suave ---------- */
    const motes = $("#heroMotes");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (motes && !reduce) {
      for (let i = 0; i < 16; i++) {
        const m = document.createElement("span");
        m.className = "mote";
        const size = 3 + Math.random() * 9;
        m.style.left = Math.random() * 100 + "%";
        m.style.width = m.style.height = size + "px";
        m.style.animationDuration = 11 + Math.random() * 15 + "s";
        m.style.animationDelay = -Math.random() * 22 + "s";
        m.style.opacity = 0.25 + Math.random() * 0.5;
        motes.appendChild(m);
      }
    }
    // Parallax del marco del hero
    const frame = $("#heroFrame");
    if (frame && !reduce) {
      window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y < 900) frame.style.transform = `translateY(${y * 0.06}px)`;
      }, { passive: true });
    }
  });
})();
