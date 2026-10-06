/* ============================================================
   ALAMBIC · Página Tienda (grid + cantidad + quick view)
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.addEventListener("DOMContentLoaded", () => {
    const A = window.ALAMBIC;
    const D = window.ALAMBIC_DATA;
    const products = A.allProducts;

    /* ---------- Tarjeta de producto ---------- */
    const card = (p) => `
      <article class="pcard" data-cat="${p.cat}" data-id="${p.id}">
        <div class="pcard-media" data-quick="${p.id}">
          <span class="pcard-tag">${p.tag}</span>
          <span class="pcard-size">${p.medida}</span>
          <img src="${p.img}" alt="${p.nombre} — ${p.tag} ALAMBIC" loading="lazy" />
          <span class="pcard-view">Vista rápida</span>
        </div>
        <div class="pcard-body">
          <div class="pcard-head">
            <h3>${p.nombre}</h3>
            <strong class="pcard-price">${A.money(p.precio)}</strong>
          </div>
          <span class="botanico">${p.botanico}</span>
          <p class="pcard-notas"><b>Notas:</b> ${p.notas}</p>
          <div class="chips">${p.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
          <div class="pcard-buy">
            <div class="qty" data-qty="${p.id}">
              <button class="qty-dec" aria-label="Menos">−</button>
              <input class="qty-input" type="text" inputmode="numeric" value="1" aria-label="Cantidad" />
              <button class="qty-inc" aria-label="Más">+</button>
            </div>
            <button class="btn btn-add" data-add="${p.id}">Añadir</button>
          </div>
          <a class="pcard-wa js-prodwa" data-wa="${p.id}" href="#" target="_blank" rel="noopener">
            <svg class="wa-ico" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5L8.7 6.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c2 .9 2 .6 2.4.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1c-.1-.1-.3-.2-.6-.4z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>
      </article>`;

    $("#shopGrid").innerHTML = products.map(card).join("");

    // Enlaces WhatsApp por producto
    $$(".js-prodwa").forEach((a) => {
      const p = A.findProduct(a.dataset.wa);
      a.href = A.productWa(p, 1);
    });

    /* ---------- Próximamente ---------- */
    $("#shopSoon").innerHTML = D.proximamente.map((s) => `
      <div class="soon">
        <img src="${s.img}" alt="${s.nombre}" loading="lazy" />
        <div class="soon-body">
          <span class="soon-tag">Próximamente</span>
          <h3>${s.nombre}</h3>
          <p>${s.desc}</p>
        </div>
      </div>`).join("");

    /* ---------- Cantidad (stepper) ---------- */
    const getQtyEl = (id) => $(`.qty[data-qty="${id}"] .qty-input`);
    const readQty = (id) => Math.max(1, parseInt(getQtyEl(id).value, 10) || 1);
    const writeQty = (id, v) => { getQtyEl(id).value = Math.max(1, v); syncWa(id); };
    const syncWa = (id) => {
      const a = $(`.js-prodwa[data-wa="${id}"]`);
      if (a) a.href = A.productWa(A.findProduct(id), readQty(id));
    };

    $("#shopGrid").addEventListener("click", (e) => {
      const dec = e.target.closest(".qty-dec");
      const inc = e.target.closest(".qty-inc");
      const add = e.target.closest("[data-add]");
      const quick = e.target.closest("[data-quick]");
      if (dec) { const id = dec.closest(".qty").dataset.qty; writeQty(id, readQty(id) - 1); }
      if (inc) { const id = inc.closest(".qty").dataset.qty; writeQty(id, readQty(id) + 1); }
      if (add) {
        const id = add.dataset.add;
        A.add(id, readQty(id));
        add.classList.add("added");
        const label = add.textContent;
        add.textContent = "✓ Añadido";
        setTimeout(() => { add.classList.remove("added"); add.textContent = "Añadir"; }, 1300);
      }
      if (quick && !e.target.closest(".qty") && !e.target.closest("[data-add]")) {
        openQuick(quick.dataset.quick);
      }
    });
    $("#shopGrid").addEventListener("input", (e) => {
      if (e.target.classList.contains("qty-input")) {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        const id = e.target.closest(".qty").dataset.qty;
        syncWa(id);
      }
    });

    /* ---------- Filtros ---------- */
    $("#shopFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      $$(".filter").forEach((f) => f.classList.remove("active"));
      b.classList.add("active");
      const f = b.dataset.filter;
      $$("#shopGrid .pcard").forEach((c) => {
        c.style.display = f === "all" || c.dataset.cat === f ? "" : "none";
      });
      $("#shopGrid").style.display = f === "soon" ? "none" : "";
      $("#soonWrap").style.display = f === "all" || f === "soon" ? "" : "none";
    });

    /* ---------- Quick view modal ---------- */
    const modal = $("#quick");
    function openQuick(id) {
      const p = A.findProduct(id);
      if (!p) return;
      $("#quickBody").innerHTML = `
        <div class="quick-media"><img src="${p.img}" alt="${p.nombre}" /></div>
        <div class="quick-info">
          <span class="quick-tag">${p.tag} · ${p.medida} · ${A.money(p.precio)}</span>
          <h3>${p.nombre}</h3>
          <span class="botanico">${p.botanico}</span>
          <p class="quick-desc">${p.desc}</p>
          <dl class="quick-meta">
            <div><dt>Familia olfativa</dt><dd>${p.familia}</dd></div>
            <div><dt>Notas</dt><dd>${p.notas}</dd></div>
            <div><dt>Uso sugerido</dt><dd>${p.uso}</dd></div>
            <div><dt>Beneficios</dt><dd>${p.beneficio}</dd></div>
          </dl>
          <div class="quick-buy">
            <div class="qty" data-qty="q-${p.id}">
              <button class="qty-dec" aria-label="Menos">−</button>
              <input class="qty-input" type="text" inputmode="numeric" value="1" aria-label="Cantidad" />
              <button class="qty-inc" aria-label="Más">+</button>
            </div>
            <button class="btn btn-add" data-qadd="${p.id}">Añadir a mi selección</button>
          </div>
          <a class="pcard-wa" href="${A.productWa(p, 1)}" target="_blank" rel="noopener" id="quickWa">
            <svg class="wa-ico" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5L8.7 6.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c2 .9 2 .6 2.4.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1c-.1-.1-.3-.2-.6-.4z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>`;
      modal.classList.add("open");
      $("#quickOverlay").classList.add("show");
      document.body.style.overflow = "hidden";

      const qEl = $(`.qty[data-qty="q-${p.id}"] .qty-input`);
      const rq = () => Math.max(1, parseInt(qEl.value, 10) || 1);
      $("#quickBody").addEventListener("click", (e) => {
        if (e.target.closest(".qty-dec")) { qEl.value = Math.max(1, rq() - 1); updWa(); }
        if (e.target.closest(".qty-inc")) { qEl.value = rq() + 1; updWa(); }
        const qadd = e.target.closest("[data-qadd]");
        if (qadd) { A.add(p.id, rq()); closeQuick(); }
      });
      qEl.addEventListener("input", () => { qEl.value = qEl.value.replace(/[^0-9]/g, ""); updWa(); });
      const updWa = () => { $("#quickWa").href = A.productWa(p, rq()); };
    }
    function closeQuick() {
      modal.classList.remove("open");
      $("#quickOverlay").classList.remove("show");
      document.body.style.overflow = "";
    }
    $("#quickClose").addEventListener("click", closeQuick);
    $("#quickOverlay").addEventListener("click", closeQuick);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeQuick(); });
  });
})();
