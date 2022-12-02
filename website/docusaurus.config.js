const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS Exams',
  tagline: 'A website for Computer Science Students in Trinity College Dublin',
  url: 'https://cs-exams.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nating',
  projectName: 'cs-exams',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nating/cs-exams/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nating/cs-exams/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CS Exams',
        logo: {
          alt: 'CS Exams Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/first-year',
            label: 'First Year',
            position: 'right',
          },
          {
            to: 'docs/schols',
            label: 'Schols',
            position: 'right',
          },
          {
            to: 'docs/second-year',
            label: 'Second Year',
            position: 'right',
          },
          {
            to: 'docs/third-year',
            label: 'Third Year',
            position: 'right',
          },
          {
            to: 'docs/fourth-year',
            label: 'Fourth Year',
            position: 'right',
          },
          {
            to: 'docs/fifth-year',
            label: 'Fifth Year',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Years',
            items: [
              {
                to: 'docs/first-year',
                label: 'First Year',
              },
              {
                to: 'docs/schols',
                label: 'Schols',
              },
              {
                to: 'docs/second-year',
                label: 'Second Year',
              },
              {
                to: 'docs/third-year',
                label: 'Third Year',
              },
              {
                to: 'docs/fourth-year',
                label: 'Fourth Year',
              },
              {
                to: 'docs/fifth-year',
                label: 'Fifth Year',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributors',
                href: 'https://github.com/nating/cs-exams/graphs/contributors',
              },
              {
                label: 'Get in touch',
                href: 'mailto:nating@tcd.ie',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nating/cs-exams',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nating`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
