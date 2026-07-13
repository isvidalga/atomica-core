# atomica-core

Fuente oficial de conocimiento de **ATÓMICA**. Sitio de documentación en
Markdown, versionado y desplegable en Cloudflare Pages. Separado del
repositorio de producto `Atomica-app`.

Construido con [Docusaurus 3](https://docusaurus.io/) (Node ≥ 20).

## Características de la infraestructura

- Contenido 100 % en **Markdown/MDX** bajo control de **Git**.
- **Navegación lateral** autogenerada desde la estructura de `docs/`.
- **Buscador local** offline (sin Algolia ni servicios externos).
- Diagramas **Mermaid**.
- **Modo claro/oscuro** (respeta la preferencia del sistema).
- **Versionado** nativo de la documentación.
- Sitio en **español**.

## Requisitos

- Node.js ≥ 20 (ver `.nvmrc`).
- npm.

## Ejecutar en local

```bash
npm install        # instala dependencias (solo la primera vez)
npm start          # servidor de desarrollo con recarga en caliente
```

Abre `http://localhost:3000`.

Otros comandos útiles:

```bash
npm run build      # genera el sitio estático en /build
npm run serve      # sirve /build en local para verificar el build de producción
npm run clear      # limpia la caché de Docusaurus
```

## Añadir contenido

1. Crea archivos `.md` o `.mdx` dentro de `docs/`.
2. Agrupa por carpetas; la barra lateral se genera sola.
3. Controla el orden con `sidebar_position` en el frontmatter o con un
   archivo `_category_.json` por carpeta.

No hay que tocar `sidebars.js` para añadir documentos.

## Versionado

Para congelar el estado actual de la documentación como una versión estable:

```bash
npm run docs:version 1.0
```

Esto crea `versioned_docs/version-1.0/` y `versioned_sidebars/`, y activa
automáticamente el selector de versión en la barra de navegación. La carpeta
`docs/` pasa a representar la versión en desarrollo ("Next"). Repite el
comando (`1.1`, `2.0`, …) en cada corte de versión.

Referencia: https://docusaurus.io/docs/versioning

## Despliegue en Cloudflare Pages

1. Sube este repositorio a GitHub (`isvidalga/atomica-core`).
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages →
   Connect to Git** y selecciona el repositorio.
3. Configuración de build:
   - **Framework preset**: Docusaurus (o "None").
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
4. **Variables de entorno** → añade `NODE_VERSION` = `20` (Cloudflare usa
   una versión antigua de Node por defecto; Docusaurus 3 requiere ≥ 20).
5. Deploy. Cada `push` a `main` redepliega automáticamente; las ramas de PR
   generan previsualizaciones.

### Dominio personalizado

En **Pages → tu proyecto → Custom domains**, añade el dominio (p. ej.
`docs.atomicalab.es`) y crea el registro CNAME que Cloudflare indique.
Recuerda actualizar `url` y `baseUrl` en `docusaurus.config.js`.

## Estructura

```
atomica-core/
├── docs/                  # contenido (Markdown/MDX)
├── src/css/custom.css     # tema y colores de marca
├── static/                # activos estáticos (imágenes, favicon…)
├── docusaurus.config.js   # configuración del sitio
├── sidebars.js            # barra lateral (autogenerada)
├── versioned_docs/        # se crea al cortar versiones
└── package.json
```
