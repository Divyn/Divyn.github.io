// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Divyasshree’s Portfolio",
  tagline: "Tech Storyteller",
  favicon: "img/favicon.ico",

  url: "https://divyn.github.io",
  baseUrl: "/",

  organizationName: "divyn", // GitHub username
  projectName: "divyn.github.io", // GitHub Pages repo
  deploymentBranch: "gh-pages", // Branch for GitHub Pages deployment
trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs", // ✅ Ensures your docs are served at /docs/
          editUrl: "https://github.com/divyn/divyn.github.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/divyn/divyn.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 1,
          filename: "sitemap.xml",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/portfolio-banner.jpg", // Replace with your portfolio banner
    navbar: {
      title: "Divyasshree’s Portfolio",
      logo: {
        alt: "Divyasshree Logo",
        src: "img/logo.svg", // Replace with your logo
      },
      items: [
        { to: "/docs/intro", label: "Home", position: "left" }, // ✅ Links Home to the Docs section correctly
    
        {
          href: "https://github.com/divyasshree-BQ",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://x.com/divyasshree_",
          label: "Twitter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Follow Me",
          items: [
            {
              label: "Second GitHub",
              href: "https://github.com/divyn",
            },
            {
              label: "Twitter",
              href: "https://x.com/divyasshree_",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/divyasshree-n/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Divyasshree. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
