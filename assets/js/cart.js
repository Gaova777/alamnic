/* ============================================================
   ALAMBIC · Carrito compartido (index + tienda)
   Expone window.ALAMBIC con helpers usados por home.js y shop.js
   ============================================================ */
(function () {
  "use strict";
  const D = window.ALAMBIC_DATA;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WA = D.brand.whatsapp;
  const waLink = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

  const allProducts = [
    ...D.aceites.map((p) => ({ ...p, cat: "aceites", tag: "Aceite esencial" })),
    ...D.rollons.map((p) => ({ ...p, cat: "rollons", tag: "Roll-on" })),
  ];
  const findProduct = (id) => allProducts.find((p) => p.id === id);

  /* ---------- Estado ---------- */
  let cart = load();
  function load() {
    try { return JSON.parse(localStorage.getItem("alambic_cart")) || {}; }
    catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem("alambic_cart", JSON.stringify(cart)); } catch (e) {}
  }
  const totalItems = () => Object.values(cart).reduce((a, b) => a + b, 0);

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    $("#toastMsg").textContent = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Añadir ---------- */
  function add(id, qty = 1) {
    if (!findProduct(id)) return;
    cart[id] = (cart[id] || 0) + qty;
    save();
    renderCart();
    bump();
    const p = findProduct(id);
    toast(`${qty} × ${p.nombre} añadido${qty > 1 ? "s" : ""} 🌿`);
  }
  function setQty(id, q) {
    if (q <= 0) delete cart[id];
    else cart[id] = q;
    save();
    renderCart();
  }

  function bump() {
    const cc = $("#cartCount");
    const btn = $("#cartBtn");
    if (cc) { cc.style.transform = "scale(1.4)"; setTimeout(() => (cc.style.transform = ""), 220); }
    if (btn) { btn.classList.add("has-items"); }
  }

  /* ---------- Render drawer ---------- */
  function renderCart() {
    const cc = $("#cartCount");
    const count = totalItems();
    if (cc) {
      cc.textContent = count;
      cc.classList.toggle("show", count > 0);
    }
    const btn = $("#cartBtn");
    if (btn) btn.classList.toggle("has-items", count > 0);

    const box = $("#cartItems");
    if (!box) return;
    const items = Object.entries(cart);
    const checkout = $("#checkoutBtn");

    if (!items.length) {
      box.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12L6 6z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>
          <p>Tu selección está vacía.<br>Explora la tienda y añade tus favoritos 🌿</p>
          <a href="tienda.html" class="btn btn-emerald btn-sm" style="margin-top:18px">Ir a la tienda</a>
        </div>`;
      if (checkout) { checkout.disabled = true; checkout.style.opacity = ".5"; checkout.style.pointerEvents = "none"; }
      return;
    }
    if (checkout) { checkout.disabled = false; checkout.style.opacity = "1"; checkout.style.pointerEvents = "auto"; }

    box.innerHTML = items.map(([id, q]) => {
      const p = findProduct(id);
      if (!p) return "";
      return `
      <div class="ci">
        <img class="ci-img" src="${p.img}" alt="${p.nombre}" />
        <div class="ci-info">
          <h4>${p.nombre}</h4>
          <div class="ci-meta">${p.tag} · ${p.medida}</div>
          <div class="ci-qty">
            <button data-dec="${id}" aria-label="Quitar uno">−</button>
            <span>${q}</span>
            <button data-inc="${id}" aria-label="Añadir uno">+</button>
          </div>
        </div>
        <button class="ci-remove" data-rem="${id}" aria-label="Quitar ${p.nombre}">Quitar</button>
      </div>`;
    }).join("");
  }

  /* ---------- Eventos drawer ---------- */
  function initDrawer() {
    const box = $("#cartItems");
    if (box) {
      box.addEventListener("click", (e) => {
        const { inc, dec, rem } = e.target.dataset;
        if (inc) setQty(inc, (cart[inc] || 0) + 1);
        if (dec) setQty(dec, (cart[dec] || 0) - 1);
        if (rem) setQty(rem, 0);
      });
    }
    const open = () => { $("#cart")?.classList.add("open"); $("#overlay")?.classList.add("show"); document.body.style.overflow = "hidden"; };
    const close = () => { $("#cart")?.classList.remove("open"); $("#overlay")?.classList.remove("show"); document.body.style.overflow = ""; };
    $("#cartBtn")?.addEventListener("click", open);
    $("#cartClose")?.addEventListener("click", close);
    $("#overlay")?.addEventListener("click", close);

    $("#checkoutBtn")?.addEventListener("click", () => {
      const items = Object.entries(cart);
      if (!items.length) return;
      let msg = `¡Hola ALAMBIC! 🌿 Quiero hacer un pedido:%0A%0A`;
      items.forEach(([id, q]) => {
        const p = findProduct(id);
        if (p) msg += `• ${q} × ${p.nombre} (${p.tag}, ${p.medida})%0A`;
      });
      msg += `%0AQuedo atent@ para confirmar disponibilidad, precios y envío. ¡Gracias!`;
      window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
    });
  }

  /* ---------- Enlaces WhatsApp base + footer + nav + header ---------- */
  function initChrome() {
    const baseMsg = `¡Hola ALAMBIC! 🌿 Vengo desde su página web y me gustaría recibir más información.`;
    $$(".js-wa").forEach((a) => (a.href = waLink(baseMsg)));
    const navWa = $("#navWa"); if (navWa) navWa.href = waLink(baseMsg);

    const ig = $("#footIg"); if (ig) { ig.href = D.brand.instagramUrl; ig.textContent = "Instagram · " + D.brand.instagram; }
    const fb = $("#footFb"); if (fb) fb.href = D.brand.facebookUrl;
    const loc = $("#footLoc"); if (loc) loc.textContent = D.brand.location;
    const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
    const footWa = $("#footWa"); if (footWa) footWa.href = waLink(baseMsg);

    const social = $("#social");
    if (social) {
      social.innerHTML = `
      <a href="${D.brand.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.6 15.6 2.6 15.2 2.6 12s0-3.5.1-4.7c.1-1.1.2-1.7.4-2.1.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg></a>
      <a href="${D.brand.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.6v8h3.3z"/></svg></a>
      <a href="${waLink(baseMsg)}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5L8.7 6.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c2 .9 2 .6 2.4.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1c-.1-.1-.3-.2-.6-.4z"/></svg></a>`;
    }

    // Header scroll
    const header = $("#header");
    if (header) {
      const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    // Nav móvil
    const nav = $("#navLinks");
    $("#hamburger")?.addEventListener("click", () => nav?.classList.toggle("open"));
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => nav?.classList.remove("open")));

    // Reveal
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------- API pública ---------- */
  window.ALAMBIC = {
    data: D, allProducts, findProduct, waLink,
    add, setQty, renderCart,
    productWa: (p, qty = 1) => waLink(`¡Hola ALAMBIC! 🌿 Me interesa ${qty > 1 ? qty + " × " : ""}*${p.nombre}* (${p.tag}, ${p.medida}). ¿Me cuentas disponibilidad y precio?`),
  };

  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    initDrawer();
    renderCart();
  });
})();
