# 🚀 Guía de despliegue — ALAMBIC en Vercel

El sitio ya está listo y con Git inicializado en esta carpeta. Solo faltan **dos pasos**:
subirlo a **GitHub** y conectarlo con **Vercel**. Toma ~5 minutos.

> Cuenta a usar: **gaova777@utp.edu.co** (ya configurada en Git como `juandanalitica`).

---

## Paso 1 · Crear el repositorio en GitHub

1. Entra a **https://github.com/new** (inicia sesión con `gaova777@utp.edu.co`).
2. **Repository name:** `alambic-tienda` (o el que prefieras).
3. Déjalo **Public** o **Private** (cualquiera funciona con Vercel).
4. **NO** marques "Add a README / .gitignore / license" (ya los tenemos).
5. Clic en **Create repository**.
6. Copia la URL que te muestra, del tipo:
   `https://github.com/juandanalitica/alambic-tienda.git`

## Paso 2 · Subir el código

En la terminal, dentro de `C:\Proyectos\propios\alambic`, ejecuta (reemplaza la URL por la tuya):

```bash
git remote add origin https://github.com/juandanalitica/alambic-tienda.git
git branch -M main
git push -u origin main
```

> Si te pide autenticación, inicia sesión con tu cuenta de GitHub
> (o usa un *Personal Access Token* como contraseña).

## Paso 3 · Conectar con Vercel

1. Entra a **https://vercel.com** y haz **Sign up / Log in con GitHub**
   (usa la misma cuenta `gaova777@utp.edu.co`).
2. Clic en **Add New… → Project**.
3. Vercel listará tus repositorios de GitHub → elige **`alambic-tienda`** → **Import**.
4. Configuración (déjala así):
   - **Framework Preset:** `Other`
   - **Build Command:** *(vacío)*
   - **Output Directory:** *(vacío / raíz)*
   - **Root Directory:** `./`
5. Clic en **Deploy**.

En menos de un minuto tendrás una URL en vivo, tipo:
`https://alambic-tienda.vercel.app` 🎉

## Paso 4 · Actualizaciones futuras

Cada vez que cambies algo, súbelo y Vercel redespliega solo:

```bash
git add .
git commit -m "Actualizo catálogo"
git push
```

---

## (Opcional) Dominio propio
En Vercel: **Project → Settings → Domains** para conectar un dominio como
`alambicbyaura.com`. Vercel te da los registros DNS a configurar.

## ¿Problemas?
- **La imagen no carga:** revisa que el archivo exista en `assets/img/` con el mismo nombre.
- **WhatsApp no abre:** verifica el número en `assets/js/data.js` → `brand.whatsapp`.
- Cuéntame el error y te ayudo.
