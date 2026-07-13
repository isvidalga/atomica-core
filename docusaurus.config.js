// @ts-check
// Configuración de atomica-core — fuente oficial de conocimiento de ATÓMICA.
// Docs: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ATÓMICA · Conocimiento',
  tagline: 'Fuente oficial de conocimiento de ATÓMICA',
  favicon: 'img/favicon.ico',

  // URL de producción. Ajustar al dominio real (p. ej. docs.atomicalab.es).
  url: 'https://atomica-core.pages.dev',
  baseUrl: '/',

  // Metadatos del repositorio (GitHub Pages no se usa; sirve para editUrl).
  organizationName: 'isvidalga',
  projectName: 'atomica-core',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Sitio en español.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // Necesario para diagramas Mermaid.
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // Buscador local offline (sin Algolia, sin cuenta, sin red en runtime).
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['es'],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // La documentación se sirve en la raíz del sitio.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/isvidalga/atomica-core/tree/main/',
          // Versionado: al ejecutar `npm run docs:version X.Y` se congela
          // una versión en versioned_docs/ y aparece el selector de versión.
        },
        blog: false, // Sitio de documentación puro, sin blog.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true, // Respeta la preferencia del SO.
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
      navbar: {
        title: 'ATÓMICA',
        logo: {
          alt: 'ATÓMICA',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'principal',
            position: 'left',
            label: 'Documentación',
          },
          // El selector de versión aparece automáticamente cuando existe
          // al menos una versión congelada en versioned_docs/.
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/isvidalga/atomica-core',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} ATÓMICA.`,
      },
    }),
};

export default config;
