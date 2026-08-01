# Horizonte — Sitio web

Sitio institucional de **Horizonte — Consultora de Gestión Administrativo-Contable** (Mar del Plata, Argentina).

Sitio estático en HTML + CSS + JavaScript, sin dependencias de build ni frameworks. Diseño fiel al Manual de Marca: paleta (Azul Institucional `#2C5B8C`, Azul Marino `#1F3A54`, Papel/Crema `#F4F1EA`, Tinta `#16221D`) y tipografías Manrope + Inter (Google Fonts).

## Estructura

```text
├── index.html        # Página única (landing)
├── css/styles.css    # Estilos (sistema de diseño de marca)
├── js/main.js        # Menú móvil, animaciones, formulario (WhatsApp)
├── assets/favicon.svg
├── assets/og.png        # Imagen de preview al compartir (1200×630)
├── assets/og.source.html # Fuente de la que se genera og.png
└── README.md
```

### Regenerar la imagen de preview

`assets/og.png` se renderiza desde `assets/og.source.html` con Chrome headless:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --screenshot=assets/og.png \
  --virtual-time-budget=6000 assets/og.source.html
```

## Despliegue en Vercel

1. Subí esta carpeta a un repositorio de GitHub / GitLab / Bitbucket.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importá el repositorio.
3. Vercel detecta automáticamente que es un sitio estático:
   - **Framework Preset:** `Other`
   - **Build Command:** *(vacío)*
   - **Output Directory:** *(vacío, raíz del repo)*
4. **Deploy.** Listo — cada push a la rama principal redeploya solo.

### Alternativa por CLI

```bash
npm i -g vercel
vercel        # desde la raíz del proyecto
```

## Notas

- El formulario de contacto no requiere backend: arma el mensaje y abre WhatsApp (`wa.me`) con el texto ya redactado. El número está en `WHATSAPP_NUMBER` (`js/main.js`). Si más adelante se quiere un envío real por email, se puede migrar a Vercel Functions o un servicio como Formspree sin cambiar el diseño.
- Tipografías servidas desde Google Fonts; no hace falta instalar nada localmente.
- Las meta tags Open Graph usan URLs **absolutas** apuntando a `https://horizonte-web.vercel.app`. Al conectar un dominio propio hay que actualizar `og:url`, `og:image`, `twitter:image` y `<link rel="canonical">` en `index.html`.
- Probado para navegadores modernos; respeta `prefers-reduced-motion`.
