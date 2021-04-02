module.exports = {
  title: 'CS Exams',
  tagline: 'A website for Computer Science Students in Trinity College Dublin',
  url: 'https://cs-exams.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nating', // Usually your GitHub org/user name.
  projectName: 'cs-exams', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CS Exams',
      logo: {
        alt: 'CS Exams Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/digital-logic-design',
          label: 'First Year',
          position: 'right',
        },
        {
          to: 'docs/computer-systems',
          label: 'Schols',
          position: 'right',
        },
        {
          to: 'docs/algorithms-and-data-structures',
          label: 'Second Year',
          position: 'right',
        },
        {
          to: 'docs/advanced-telecommunications',
          label: 'Third Year',
          position: 'right',
        },
        {
          to: 'docs/advanced-computational-linguistics',
          label: 'Fourth Year',
          position: 'right',
        },
        {
          to: 'docs/information-retrieval-and-web-search',
          label: 'Fifth Year',
          position: 'right',
        }
      ],
    },
    footer: {
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nating/cs-exams/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nating/cs-exams/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
