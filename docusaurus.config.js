// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Divyasshree’s Portfolio",
  tagline: "Tech Storyteller & Problem Solver",
  favicon: "img/favicon.ico",

  url: "https://divyn.github.io",
  baseUrl: "/",

  organizationName: "divyn", // GitHub username
  projectName: "divyn.github.io", // GitHub Pages repo
  deploymentBranch: "gh-pages", // Branch for GitHub Pages deployment

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
          routeBasePath: "work", // Makes '/work' the section for your projects/blogs
          editUrl: "https://github.com/divyn/divyn.github.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/divyn/divyn.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
        { to: "/", label: "Home", position: "left" },
        { to: "/about", label: "About", position: "left" },
        { to: "/work", label: "Work", position: "left" }, // Links to your Docs section
     
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
          title: "Portfolio",
          items: [
            { label: "About Me", to: "/about" },
            { label: "Work", to: "/work" },
            { label: "Blog", to: "/blog" },
          ],
        },
        {
          title: "Follow Me",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/divyn",
            },
            {
              label: "Twitter",
              href: "https://x.com/divyasshree_",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/divyasshree/",
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
