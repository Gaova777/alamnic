# 🌿 ALAMBIC · Tienda online

E-commerce de **aromaterapia artesanal y bienestar consciente** para ALAMBIC (Roldanillo, Valle del Cauca).
Catálogo de aceites esenciales, roll-ons y experiencias, con **carrito y checkout por WhatsApp**.

- **Diseño:** dorado · marrón · cobre · esmeralda (ambiental)
- **Tipografías:** Cormorant Garamond + Nunito Sans
- **Hero:** montaje cinematográfico animado con fotos reales de la marca
- **Sin dependencias / sin build:** HTML, CSS y JS estáticos → despliegue instantáneo en Vercel
- **WhatsApp:** +57 312 841 6705 (`wa.me/573128416705`)

## Estructura

```
index.html              Página principal (una sola página con secciones)
assets/
  css/styles.css        Estilos y diseño
  js/data.js            👉 Catálogo editable (productos, textos, contacto)
  js/app.js             Carrito, WhatsApp, animaciones
  img/                  Fotos de la marca
vercel.json             Configuración de Vercel (caché + URLs limpias)
scripts/server.js       Servidor local para pruebas (no se despliega)
```

## Editar contenido

Casi todo el contenido vive en **`assets/js/data.js`**: productos, aromas, testimonios,
preguntas frecuentes, redes sociales y el número de WhatsApp. Cambia ahí y guarda.

### Mostrar precios más adelante
Hoy los precios están ocultos (botón *Consultar por WhatsApp*). Cuando quieras mostrarlos,
agrega un campo `precio` a cada producto en `data.js` y avísame para renderizarlo en las tarjetas.

## Ver en local

```bash
node scripts/server.js
# abre http://localhost:4321
```

## Desplegar en Vercel

Ver la guía paso a paso en **[DEPLOY.md](DEPLOY.md)**.

---
Hecho con 🤎 para ALAMBIC · *Recuerda tu esencia*
