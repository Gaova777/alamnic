/* ============================================================
   ALAMBIC · Tienda (filtros por presentación, guía de uso)
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.addEventListener("DOMContentLoaded", () => {
    const A = window.ALAMBIC;
    const D = A.data;
    const grid = $("#shopGrid");

    /* ---------- Grid por presentación ---------- */
    function render(filter) {
      const list = filter === "all" ? D.productos : D.productos.filter((p) => p.variantes.some((v) => v.id === filter));
      grid.innerHTML = list.map((p) => A.card(p, filter)).join("");
      A.observe?.();
      $("#shopCount").textContent = `${list.length} ${list.length === 1 ? "producto" : "productos"}`;
    }
    A.bindCards(grid);

    const filters = $("#shopFilters");
    const fromHash = location.hash.replace("#", "");
    const initial = ["roll", "ae", "tonico"].includes(fromHash) ? fromHash : "all";
    $$(".filter", filters).forEach((b) => b.classList.toggle("active", b.dataset.filter === initial));
    render(initial);

    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b || b.classList.contains("active")) return;
      $$(".filter", filters).forEach((f) => { f.classList.remove("active"); f.setAttribute("aria-pressed", "false"); });
      b.classList.add("active");
      b.setAttribute("aria-pressed", "true");
      grid.classList.add("fading");
      setTimeout(() => { render(b.dataset.filter); grid.classList.remove("fading"); }, 180);
    });

    /* ---------- Próximamente ---------- */
    $("#shopSoon").innerHTML = D.proximamente.map((s) => `
      <article class="soon reveal">
        <img src="${s.img}" alt="${s.nombre}" loading="lazy" />
        <div class="soon-body">
          <span class="tag-soon">Próximamente</span>
          <h3>${s.nombre}</h3>
          <p>${s.desc}</p>
        </div>
      </article>`).join("");

    /* ---------- Guía de uso ---------- */
    $("#usoGrid").innerHTML = D.formasUso.map((f) => `
      <div class="uso reveal">
        <h4>${f.forma}</h4>
        <p>${f.como}</p>
        <span class="uso-ideal">Ideal para · ${f.ideal}</span>
      </div>`).join("");
    $("#ritualList").innerHTML = D.ritual.map((r) => `<li>${r}</li>`).join("");
    $("#precList").innerHTML = D.precauciones.map((r) => `<li>${r}</li>`).join("");

    A.observe?.();
  });
})();
