/* ============================================================
   ALAMBIC · App
   ============================================================ */
(function () {
  "use strict";
  const D = window.ALAMBIC_DATA;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const WA = D.brand.whatsapp;
  const waLink = (text) =>
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

  /* ---------- Enlaces WhatsApp base ---------- */
  const baseMsg =
    `¡Hola ALAMBIC! 🌿 Vengo desde su página web y me gustaría recibir más información.`;
  $$(".js-wa").forEach((a) => (a.href = waLink(baseMsg)));
  $("#navWa").href = waLink(baseMsg);

  /* ---------- Footer contacto ---------- */
  $("#footIg").href = D.brand.instagramUrl;
  $("#footIg").textContent = "Instagram · " + D.brand.instagram;
  $("#footFb").href = D.brand.facebookUrl;
  $("#footLoc").textContent = D.brand.location;
  $("#year").textContent = new Date().getFullYear();

  $("#social").innerHTML = `
    <a href="${D.brand.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg>
    </a>
    <a href="${D.brand.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook">
      <svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.6v8h3.3z"/></svg>
    </a>
    <a href="${waLink(baseMsg)}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5L8.7 6.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c2 .9 2 .6 2.4.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1c-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z"/></svg>
    </a>`;

  /* ---------- Render productos ---------- */
  const allProducts = [
    ...D.aceites.map((p) => ({ ...p, cat: "aceites", tag: "Aceite esencial" })),
    ...D.rollons.map((p) => ({ ...p, cat: "rollons", tag: "Roll-on" })),
  ];

  const cardHTML = (p) => `
    <article class="card" data-cat="${p.cat}">
      <div class="card-media">
        <span class="card-badge">${p.medida}</span>
        <img src="${p.img}" alt="${p.nombre} — ${p.tag} ALAMBIC" loading="lazy" />
      </div>
      <div class="card-body">
        <h3>${p.nombre}</h3>
        <span class="botanico">${p.botanico}</span>
        <p class="card-desc">${p.desc}</p>
        <div class="chips">${p.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="btn btn-add" data-id="${p.id}">Añadir a mi selección</button>
          <a class="icon-wa-round" href="${waLink(
            `¡Hola ALAMBIC! 🌿 Me interesa el producto *${p.nombre}* (${p.tag}, ${p.medida}). ¿Me cuentas disponibilidad y precio?`
          )}" target="_blank" rel="noopener" aria-label="Consultar ${p.nombre} por WhatsApp">
            <svg class="wa-ico" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5L8.7 6.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 9a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c2 .9 2 .6 2.4.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1c-.1-.1-.3-.2-.6-.4z"/></svg>
          </a>
        </div>
      </div>
    </article>`;

  $("#productGrid").innerHTML = allProducts.map(cardHTML).join("");

  /* ---------- Próximamente ---------- */
  $("#soonGrid").innerHTML = D.proximamente
    .map(
      (s) => `
    <div class="soon" data-cat="soon">
      <img src="${s.img}" alt="${s.nombre}" loading="lazy" />
      <div class="soon-body">
        <span class="soon-tag">Próximamente</span>
        <h3>${s.nombre}</h3>
        <p>${s.desc}</p>
      </div>
    </div>`
    )
    .join("");

  /* ---------- Experiencias ---------- */
  $("#expGrid").innerHTML = D.experiencias
    .map(
      (e) => `
    <article class="exp-card">
      <div class="exp-media"><img src="${e.img}" alt="${e.nombre}" loading="lazy" /></div>
      <div class="exp-body">
        <h3>${e.nombre}</h3>
        <p>${e.desc}</p>
        ${
          e.disponible
            ? `<a class="btn btn-gold btn-sm" href="${waLink(
                `¡Hola ALAMBIC! 🌿 Me interesa la experiencia *${e.nombre}*. ¿Me das más información?`
              )}" target="_blank" rel="noopener">Quiero saber más</a>`
            : `<span class="exp-soon">Próximamente</span>`
        }
      </div>
    </article>`
    )
    .join("");

  /* ---------- Testimonios ---------- */
  $("#tstGrid").innerHTML = D.testimonios
    .map(
      (t) => `
    <blockquote class="tst">
      <div class="stars">★★★★★</div>
      <p>${t.texto}</p>
      <div class="who">${t.autor} — ${t.ciudad}</div>
    </blockquote>`
    )
    .join("");

  /* ---------- FAQ ---------- */
  $("#faqList").innerHTML = D.faq
    .map(
      (f) => `
    <div class="faq-item">
      <button class="faq-q">${f.q}<span class="plus"></span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`
    )
    .join("");

  $$(".faq-item").forEach((item) => {
    const q = $(".faq-q", item);
    const a = $(".faq-a", item);
    q.addEventListener("click", () => {
      const open = item.classList.contains("open");
      $$(".faq-item").forEach((i) => {
        i.classList.remove("open");
        $(".faq-a", i).style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Filtros tienda ---------- */
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter").forEach((f) => f.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    $$("#productGrid .card").forEach((c) => {
      c.style.display = f === "all" || c.dataset.cat === f ? "" : "none";
    });
    const soon = $("#soonGrid");
    soon.style.display = f === "all" || f === "soon" ? "" : "none";
    $("#productGrid").style.display = f === "soon" ? "none" : "";
  });

  /* ============================================================
     CARRITO
     ============================================================ */
  const findProduct = (id) => allProducts.find((p) => p.id === id);
  let cart = loadCart();

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem("alambic_cart")) || {};
    } catch (e) {
      return {};
    }
  }
  function saveCart() {
    try {
      localStorage.setItem("alambic_cart", JSON.stringify(cart));
    } catch (e) {}
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    bump();
  }
  function setQty(id, q) {
    if (q <= 0) delete cart[id];
    else cart[id] = q;
    saveCart();
    renderCart();
  }

  const totalItems = () => Object.values(cart).reduce((a, b) => a + b, 0);

  function renderCart() {
    const items = Object.entries(cart);
    const count = totalItems();
    const cc = $("#cartCount");
    cc.textContent = count;
    cc.classList.toggle("show", count > 0);

    if (!items.length) {
      $("#cartItems").innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12L6 6z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>
          <p>Tu selección está vacía.<br>Explora la tienda y añade tus favoritos 🌿</p>
        </div>`;
      $("#checkoutBtn").disabled = true;
      $("#checkoutBtn").style.opacity = ".5";
      $("#checkoutBtn").style.pointerEvents = "none";
      return;
    }
    $("#checkoutBtn").disabled = false;
    $("#checkoutBtn").style.opacity = "1";
    $("#checkoutBtn").style.pointerEvents = "auto";

    $("#cartItems").innerHTML = items
      .map(([id, q]) => {
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
          <button class="ci-remove" data-rem="${id}">Quitar</button>
        </div>`;
      })
      .join("");
  }

  $("#cartItems").addEventListener("click", (e) => {
    const inc = e.target.dataset.inc;
    const dec = e.target.dataset.dec;
    const rem = e.target.dataset.rem;
    if (inc) setQty(inc, (cart[inc] || 0) + 1);
    if (dec) setQty(dec, (cart[dec] || 0) - 1);
    if (rem) setQty(rem, 0);
  });

  /* Botones "Añadir" */
  $("#productGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add");
    if (!btn) return;
    addToCart(btn.dataset.id);
    btn.classList.add("added");
    btn.textContent = "✓ Añadido";
    showToast("Añadido a tu selección 🌿");
    setTimeout(() => {
      btn.classList.remove("added");
      btn.textContent = "Añadir a mi selección";
    }, 1400);
  });

  /* Abrir / cerrar carrito */
  const openCart = () => {
    $("#cart").classList.add("open");
    $("#overlay").classList.add("show");
    document.body.style.overflow = "hidden";
  };
  const closeCart = () => {
    $("#cart").classList.remove("open");
    $("#overlay").classList.remove("show");
    document.body.style.overflow = "";
  };
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", closeCart);

  /* Checkout por WhatsApp */
  $("#checkoutBtn").addEventListener("click", () => {
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

  function bump() {
    const cc = $("#cartCount");
    cc.style.transform = "scale(1.35)";
    setTimeout(() => (cc.style.transform = ""), 200);
  }

  /* ---------- Toast ---------- */
  let toastT;
  function showToast(msg) {
    $("#toastMsg").textContent = msg;
    const t = $("#toast");
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  renderCart();

  /* ============================================================
     HEADER scroll + menú móvil
     ============================================================ */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const nav = $("#navLinks");
  $("#hamburger").addEventListener("click", () => nav.classList.toggle("open"));
  $$("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ============================================================
     Hero "motes" (partículas de luz/vapor)
     ============================================================ */
  const motes = $("#heroMotes");
  if (motes && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const N = 14;
    for (let i = 0; i < N; i++) {
      const m = document.createElement("span");
      m.className = "mote";
      const size = 4 + Math.random() * 10;
      m.style.left = Math.random() * 100 + "%";
      m.style.width = m.style.height = size + "px";
      m.style.animationDuration = 10 + Math.random() * 14 + "s";
      m.style.animationDelay = -Math.random() * 20 + "s";
      m.style.opacity = 0.3 + Math.random() * 0.5;
      motes.appendChild(m);
    }
  }
})();
