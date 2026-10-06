/* ============================================================
   ALAMBIC · Núcleo compartido (inicio + tienda)
   Carrito por presentación, tarjetas de producto, ficha y navegación.
   Expone window.ALAMBIC para home.js y shop.js
   ============================================================ */
(function () {
  "use strict";
  const D = window.ALAMBIC_DATA;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WA = D.brand.whatsapp;
  const waLink = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const money = (n) => "$" + n.toLocaleString("es-CO");
  const CART_KEY = "alambic_cart_v2";

  const findProduct = (id) => D.productos.find((p) => p.id === id);
  const findVariant = (p, vid) => p && p.variantes.find((v) => v.id === vid);
  const presName = (vid) => D.presentaciones[vid].nombre;
  // Clave de carrito: "lavanda:roll"
  const parseKey = (k) => {
    const [pid, vid] = k.split(":");
    const p = findProduct(pid);
    const v = findVariant(p, vid);
    return p && v ? { p, v } : null;
  };

  /* ---------- Estado ---------- */
  let cart = load();
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(CART_KEY)) || {};
      return Object.fromEntries(Object.entries(raw).filter(([k, q]) => parseKey(k) && q > 0));
    } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }
  const totalItems = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = () => Object.entries(cart).reduce((s, [k, q]) => s + parseKey(k).v.precio * q, 0);

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    $("#toastMsg").textContent = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2400);
  }

  /* ---------- Carrito ---------- */
  function add(pid, vid, qty = 1) {
    const r = parseKey(`${pid}:${vid}`);
    if (!r) return;
    const k = `${pid}:${vid}`;
    cart[k] = (cart[k] || 0) + qty;
    save();
    renderCart();
    const cc = $("#cartCount");
    if (cc) { cc.classList.remove("bump"); void cc.offsetWidth; cc.classList.add("bump"); }
    toast(`${qty} × ${r.p.nombre} · ${presName(vid)} añadido${qty > 1 ? "s" : ""}`);
  }
  function setQty(k, q) {
    if (q <= 0) delete cart[k];
    else cart[k] = q;
    save();
    renderCart();
  }

  function renderCart() {
    const count = totalItems();
    const cc = $("#cartCount");
    if (cc) { cc.textContent = count; cc.classList.toggle("show", count > 0); }

    const box = $("#cartItems");
    if (!box) return;
    const items = Object.entries(cart);
    const foot = $("#cartFoot");

    if (!items.length) {
      box.innerHTML = `
        <div class="cart-empty">
          <span class="mark mark-monogram" aria-hidden="true"></span>
          <p>Tu selección está vacía.<br>Explora la colección y elige tus aromas.</p>
          <a href="tienda.html" class="btn btn-dark btn-sm">Ir a la tienda</a>
        </div>`;
      if (foot) foot.hidden = true;
      return;
    }
    if (foot) foot.hidden = false;
    $("#cartSubtotal").textContent = money(subtotal());

    box.innerHTML = items.map(([k, q]) => {
      const { p, v } = parseKey(k);
      return `
      <div class="ci">
        <img class="ci-img" src="${v.img}" alt="${p.nombre}" />
        <div class="ci-info">
          <h4>${p.nombre}</h4>
          <div class="ci-meta">${presName(v.id)} · ${v.medida}</div>
          <div class="ci-row">
            <div class="ci-qty">
              <button data-dec="${k}" aria-label="Quitar uno">−</button>
              <span>${q}</span>
              <button data-inc="${k}" aria-label="Añadir uno">+</button>
            </div>
            <strong class="ci-price">${money(v.precio * q)}</strong>
          </div>
        </div>
        <button class="ci-remove" data-rem="${k}" aria-label="Quitar ${p.nombre}">
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>`;
    }).join("");
  }

  function checkoutMessage() {
    let msg = "¡Hola Alambic! Quiero hacer este pedido:\n\n";
    Object.entries(cart).forEach(([k, q]) => {
      const { p, v } = parseKey(k);
      msg += `• ${q} × ${p.nombre} — ${presName(v.id)} ${v.medida} (${money(v.precio * q)})\n`;
    });
    msg += `\nSubtotal: ${money(subtotal())}\n\nQuedo atent@ para confirmar disponibilidad, pago y envío. ¡Gracias!`;
    return msg;
  }

  /* ---------- Paneles (carrito, ficha, menú) ---------- */
  let lastFocus = null;
  function openPanel(el) {
    if (!el) return;
    lastFocus = document.activeElement;
    el.classList.add("open");
    $("#overlay")?.classList.add("show");
    document.body.classList.add("locked");
    setTimeout(() => el.querySelector("button, a")?.focus({ preventScroll: true }), 50);
  }
  function closePanels() {
    $$(".panel.open").forEach((p) => p.classList.remove("open"));
    $("#overlay")?.classList.remove("show");
    document.body.classList.remove("locked");
    lastFocus?.focus?.({ preventScroll: true });
  }

  function initCart() {
    $("#cartItems")?.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      const { inc, dec, rem } = b.dataset;
      if (inc) setQty(inc, (cart[inc] || 0) + 1);
      if (dec) setQty(dec, (cart[dec] || 0) - 1);
      if (rem) setQty(rem, 0);
    });
    $("#cartBtn")?.addEventListener("click", () => openPanel($("#cart")));
    $$("[data-close]").forEach((b) => b.addEventListener("click", closePanels));
    $("#overlay")?.addEventListener("click", closePanels);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePanels(); });
    $("#checkoutBtn")?.addEventListener("click", () => {
      if (!totalItems()) return;
      window.open(waLink(checkoutMessage()), "_blank", "noopener");
    });
  }

  /* ---------- Tarjeta de producto (compartida) ---------- */
  function card(p, preferVid) {
    const v0 = findVariant(p, preferVid) || p.variantes[0];
    const multi = p.variantes.length > 1;
    return `
    <article class="pcard reveal" data-pid="${p.id}" data-vid="${v0.id}">
      <button class="pcard-media" data-sheet="${p.id}" aria-label="Ver ficha de ${p.nombre}">
        <img src="${v0.img}" alt="${p.nombre} — ${presName(v0.id)} Alambic" loading="lazy" width="480" height="600" />
        <span class="pcard-chakra">Chakra · ${p.chakra.nombre}</span>
        <span class="pcard-view">Ver ficha</span>
      </button>
      <div class="pcard-body">
        <div class="pcard-head">
          <h3>${p.nombre}</h3>
          <strong class="pcard-price">${money(v0.precio)}</strong>
        </div>
        <span class="botanico">${p.botanico}</span>
        <p class="pcard-resumen">${p.resumen}</p>
        <div class="variants" role="radiogroup" aria-label="Presentación de ${p.nombre}">
          ${p.variantes.map((v) => `
            <button class="variant${v.id === v0.id ? " active" : ""}" role="radio" aria-checked="${v.id === v0.id}" data-variant="${v.id}"${multi ? "" : " disabled"}>
              <span>${presName(v.id)}</span><small>${v.medida}</small>
            </button>`).join("")}
        </div>
        <div class="pcard-buy">
          <div class="qty">
            <button class="qty-dec" aria-label="Menos">−</button>
            <input class="qty-input" type="text" inputmode="numeric" value="1" aria-label="Cantidad" />
            <button class="qty-inc" aria-label="Más">+</button>
          </div>
          <button class="btn btn-dark btn-add">Añadir</button>
        </div>
      </div>
    </article>`;
  }

  function setCardVariant(cardEl, vid) {
    const p = findProduct(cardEl.dataset.pid);
    const v = findVariant(p, vid);
    if (!v) return;
    cardEl.dataset.vid = vid;
    $$(".variant", cardEl).forEach((b) => {
      const on = b.dataset.variant === vid;
      b.classList.toggle("active", on);
      b.setAttribute("aria-checked", on);
    });
    $(".pcard-price", cardEl).textContent = money(v.precio);
    const img = $(".pcard-media img", cardEl);
    if (img.getAttribute("src") !== v.img) {
      img.classList.add("swap");
      setTimeout(() => { img.src = v.img; img.alt = `${p.nombre} — ${presName(vid)} Alambic`; }, 160);
      img.onload = () => img.classList.remove("swap");
    }
  }

  const readQty = (input) => Math.max(1, Math.min(99, parseInt(input.value, 10) || 1));

  // Delegación de eventos para cualquier contenedor de tarjetas
  function bindCards(root) {
    if (!root) return;
    root.addEventListener("click", (e) => {
      const cardEl = e.target.closest(".pcard");
      if (!cardEl) return;
      const input = $(".qty-input", cardEl);
      if (e.target.closest(".qty-dec")) input.value = Math.max(1, readQty(input) - 1);
      else if (e.target.closest(".qty-inc")) input.value = Math.min(99, readQty(input) + 1);
      else if (e.target.closest(".variant")) setCardVariant(cardEl, e.target.closest(".variant").dataset.variant);
      else if (e.target.closest(".btn-add")) {
        const btn = e.target.closest(".btn-add");
        add(cardEl.dataset.pid, cardEl.dataset.vid, readQty(input));
        input.value = 1;
        btn.classList.add("added");
        btn.textContent = "Añadido ✓";
        setTimeout(() => { btn.classList.remove("added"); btn.textContent = "Añadir"; }, 1400);
      } else if (e.target.closest("[data-sheet]")) openSheet(cardEl.dataset.pid, cardEl.dataset.vid);
    });
    root.addEventListener("input", (e) => {
      if (e.target.classList.contains("qty-input")) e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    });
  }

  /* ---------- Ficha de producto ---------- */
  function openSheet(pid, vid) {
    const p = findProduct(pid);
    const sheet = $("#sheet");
    if (!p || !sheet) return;
    let v = findVariant(p, vid) || p.variantes[0];
    const body = $("#sheetBody");
    body.innerHTML = `
      <div class="sheet-media"><img src="${v.img}" alt="${p.nombre}" /></div>
      <div class="sheet-info">
        <span class="eyebrow">Ficha · ${p.parte}</span>
        <h3>${p.nombre}</h3>
        <span class="botanico">${p.botanico}</span>
        <dl class="sheet-meta">
          <div><dt>Uso principal</dt><dd>${p.usoPrincipal}</dd></div>
          <div><dt>Uso emocional y energético</dt><dd>${p.usoEmocional}</dd></div>
          <div><dt>Acción medicinal</dt><dd>${p.accion}</dd></div>
          <div><dt>Chakra relacionado · ${p.chakra.nombre}</dt><dd>${p.chakra.desc}</dd></div>
        </dl>
        <div class="sheet-buy" data-pid="${p.id}" data-vid="${v.id}">
          <div class="variants" role="radiogroup" aria-label="Presentación">
            ${p.variantes.map((x) => `
              <button class="variant${x.id === v.id ? " active" : ""}" role="radio" aria-checked="${x.id === v.id}" data-variant="${x.id}"${p.variantes.length > 1 ? "" : " disabled"}>
                <span>${presName(x.id)}</span><small>${x.medida} · ${money(x.precio)}</small>
              </button>`).join("")}
          </div>
          <div class="pcard-buy">
            <div class="qty">
              <button class="qty-dec" aria-label="Menos">−</button>
              <input class="qty-input" type="text" inputmode="numeric" value="1" aria-label="Cantidad" />
              <button class="qty-inc" aria-label="Más">+</button>
            </div>
            <button class="btn btn-dark btn-add">Añadir · <span class="pcard-price">${money(v.precio)}</span></button>
          </div>
        </div>
      </div>`;
    openPanel(sheet);
  }

  function initSheet() {
    const body = $("#sheetBody");
    if (!body) return;
    body.addEventListener("click", (e) => {
      const buy = e.target.closest(".sheet-buy");
      if (!buy) return;
      const input = $(".qty-input", buy);
      const p = findProduct(buy.dataset.pid);
      if (e.target.closest(".qty-dec")) input.value = Math.max(1, readQty(input) - 1);
      else if (e.target.closest(".qty-inc")) input.value = Math.min(99, readQty(input) + 1);
      else if (e.target.closest(".variant")) {
        const vid = e.target.closest(".variant").dataset.variant;
        const v = findVariant(p, vid);
        buy.dataset.vid = vid;
        $$(".variant", buy).forEach((b) => { const on = b.dataset.variant === vid; b.classList.toggle("active", on); b.setAttribute("aria-checked", on); });
        $(".pcard-price", buy).textContent = money(v.precio);
        $(".sheet-media img", body).src = v.img;
      } else if (e.target.closest(".btn-add")) {
        add(p.id, buy.dataset.vid, readQty(input));
        closePanels();
      }
    });
    body.addEventListener("input", (e) => {
      if (e.target.classList.contains("qty-input")) e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    });
  }

  /* ---------- Navegación, enlaces y efectos ---------- */
  function initChrome() {
    const baseMsg = "¡Hola Alambic! Vengo desde su página web y me gustaría recibir más información.";
    $$(".js-wa").forEach((a) => { a.href = waLink(baseMsg); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-ig").forEach((a) => { a.href = D.brand.instagramUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-fb").forEach((a) => { a.href = D.brand.facebookUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-maps").forEach((a) => { a.href = D.brand.mapsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-address").forEach((el) => (el.textContent = D.brand.address));
    $$(".js-city").forEach((el) => (el.textContent = D.brand.city));
    $$(".js-wa-display").forEach((el) => (el.textContent = D.brand.whatsappDisplay));
    $$(".js-ig-handle").forEach((el) => (el.textContent = "@" + D.brand.instagram));
    $$(".js-year").forEach((el) => (el.textContent = new Date().getFullYear()));

    // Cabecera: fondo al hacer scroll
    const header = $("#header");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Menú móvil
    const menu = $("#menu");
    $("#menuBtn")?.addEventListener("click", () => openPanel(menu));
    $$("#menu a").forEach((a) => a.addEventListener("click", closePanels));

    // Aparición al hacer scroll
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    const observe = () => $$(".reveal:not(.in)").forEach((el) => io.observe(el));
    observe();
    window.ALAMBIC.observe = observe;
  }

  /* ---------- API pública ---------- */
  window.ALAMBIC = {
    data: D, money, waLink, presName, findProduct,
    card, bindCards, openSheet, add,
  };

  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    initCart();
    initSheet();
    renderCart();
  });
})();
