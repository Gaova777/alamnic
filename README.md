# ALAMBIC by Aura Tomich · Tienda online

E-commerce de **aceites esenciales y bienestar consciente** para ALAMBIC (Roldanillo, Valle del Cauca).
Catálogo con precios, roll-ons y servicios, con **carrito y pedido por WhatsApp**.

- **Identidad:** Guía Visual Alambic 2026: carbón `#272823`, salvia `#B0B692`, marfil `#F2F1DF`, cobre `#B0672D`
- **Logo e íconos:** vectores (SVG) extraídos de la guía, en `assets/img/logo/`
- **Tipografías:** Zolina (títulos) + "Alambic Sans" (texto, cercana a Carbona), autoalojadas en `assets/fonts/`
- **Sin dependencias / sin build:** HTML, CSS y JS estáticos, se despliegan directo en Vercel
- **WhatsApp:** +57 313 748 5109 (`wa.me/573137485109`)

## Estructura

```
index.html              Inicio (nosotros, colección, servicios, testimonios, FAQ, contacto)
tienda.html             Tienda (filtros por presentación, ficha de producto, guía de uso)
assets/
  css/styles.css        Estilos y sistema de diseño
  js/data.js            👉 Catálogo editable (productos, precios, textos, contacto)
  js/core.js            Carrito, tarjetas, ficha de producto y navegación (compartido)
  js/home.js            Inicio
  js/shop.js            Tienda
  fonts/                Zolina + Montserrat / Montserrat Alternates (woff2)
  img/logo/             Monograma, logotipo, íconos de marca, favicon
  img/marca/            Fotografía de la guía visual
  img/productos/        Fotos de producto (webp, con el tratamiento de color de la marca)
  img/fotos/            Fotos de Aura y experiencias
  video/hero.mp4        Video del alambique
vercel.json             Configuración de Vercel (caché + URLs limpias)
scripts/server.js       Servidor local para pruebas (no se despliega)
```

## Editar contenido

Casi todo vive en **`assets/js/data.js`**: productos y sus presentaciones (roll-on, aceite 100% puro,
tónico) con **precio en COP**, fichas (uso principal, emocional, chakra), servicios, testimonios,
formas de uso, precauciones, preguntas frecuentes, dirección y redes.

Si cambias CSS o JS, sube el número de versión en las etiquetas `?v=…` de `index.html` y
`tienda.html` para que los visitantes reciban la versión nueva.

## Tipografías

- **Zolina:** extraída de la Guía Visual. El PDF solo incluía letras y números, así que las tildes,
  la ñ mayúscula y los signos (`, . : ; ¿ “ ” –`) se reconstruyeron con piezas de la propia fuente.
- **Carbona** y **Madegra** venían en el PDF como versiones *Test*/*DEMO* (de prueba, sin licencia
  para publicar y sin tildes). Mientras tanto se usa "Alambic Sans": Montserrat para mayúsculas y
  números, y Montserrat Alternates para minúsculas (la "a" de un piso y la "y" en "u", como Carbona).
  Ambas son de licencia libre (OFL).
- Si la marca compra las licencias, coloca los `.woff2` en `assets/fonts/` y cambia
  `--font-body` (y `--font-display` si aplica) en `assets/css/styles.css`.

## Ver en local

```bash
node scripts/server.js
# abre http://localhost:4188
```

## Desplegar en Vercel

El repositorio está conectado a Vercel: cada `git push` a `main` publica el sitio.
Ver detalles en **[DEPLOY.md](DEPLOY.md)**.

---
Hecho con 🤎 para ALAMBIC · *Recuerda tu esencia*
