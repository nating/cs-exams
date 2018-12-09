/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of people who have contributed to the project*/
const contributors = [
  {
    caption: 'Geoff',
    image: 'https://avatars1.githubusercontent.com/u/16880181?s=460&v=4',
    infoLink: 'https://github.com/nating',
    pinned: true,
  },
  {
    caption: 'Dario',
    image: 'https://avatars2.githubusercontent.com/u/9294058?s=400&v=4',
    infoLink: 'https://github.com/dariota',
    pinned: true,
  },
  {
    caption: 'McGizzle',
    image: 'https://avatars3.githubusercontent.com/u/16902920?s=400&v=4',
    infoLink: 'https://github.com/mcgizzle',
    pinned: true,
  },
  {
    caption: 'Scarlett',
    image: 'https://avatars2.githubusercontent.com/u/11089733?s=400&v=4',
    infoLink: 'https://github.com/scarlehh',
    pinned: true,
  },
  {
    caption: 'Conor',
    image: 'https://avatars2.githubusercontent.com/u/25468725?s=460&v=4',
    infoLink: 'https://github.com/CSIGildea',
    pinned: true,
  },
  {
    caption: 'Rory',
    image: 'https://avatars1.githubusercontent.com/u/544628?s=400&v=4',
    infoLink: 'https://github.com/RoryDH',
    pinned: true,
  },
  {
    caption: 'Neasa',
    image: 'https://avatars0.githubusercontent.com/u/16213966?s=400&v=4',
    infoLink: 'https://github.com/neasatang',
    pinned: true,
  },
  {
    caption: 'Zachary',
    image: 'https://avatars2.githubusercontent.com/u/1366937?s=460&v=4',
    infoLink: 'https://github.com/zachary',
    pinned: true,
  },
  {
    caption: 'Yasir',
    image: 'https://avatars0.githubusercontent.com/u/23670577?s=400&v=4',
    infoLink: 'https://github.com/YasirZardari',
    pinned: true,
  },
  {
    caption: 'Yannick',
    image: 'https://avatars0.githubusercontent.com/u/19475841?s=400&v=4',
    infoLink: 'https://github.com/ostrich805',
    pinned: true,
  },
  {
    caption: 'Rory',
    image: 'https://avatars3.githubusercontent.com/u/1616468?s=400&v=4',
    infoLink: 'https://github.com/roryflynn',
    pinned: true,
  },
  {
    caption: 'Vahe',
    image: 'https://avatars2.githubusercontent.com/u/30231079?s=400&v=4',
    infoLink: 'https://github.com/sasunts',
    pinned: true,
  },
  {
    caption: 'Nicolas',
    image: 'https://avatars3.githubusercontent.com/u/24317810?s=460&v=4',
    infoLink: 'https://github.com/nicolasarnold12321',
    pinned: true,
  },
  {
    caption: 'Ben',
    image: 'https://avatars0.githubusercontent.com/u/26223091?s=460&v=4',
    infoLink: 'https://github.com/BenColwell131',
    pinned: true,
  },
  {
    caption: 'henrym2',
    image: 'https://avatars2.githubusercontent.com/u/33910429?s=400&v=4',
    infoLink: 'https://github.com/henrym2',
    pinned: true,
  },
  {
    caption: 'Hieu',
    image: 'https://avatars0.githubusercontent.com/u/10133845?s=400&v=4',
    infoLink: 'https://github.com/hieunguyenm',
    pinned: true,
  },
  {
    caption: 'Luke',
    image: 'https://avatars2.githubusercontent.com/u/16494867?s=400&v=4',
    infoLink: 'https://github.com/LukeHackett12',
    pinned: true,
  }
];

const siteConfig = {
  title: 'CS Exams' /* title for your website */,
  tagline: 'A website for Computer Science Students in Trinity College Dublin',
  url: 'http://cs-exams.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'cs-exams',
  organizationName: 'nating', // or set an env variable ORGANIZATION_NAME
  projectName: 'cs-exams', // or set an env variable PROJECT_NAME
  GIT_USER: 'nating',
  noIndex: false,
  cname: 'cs-exams.com',
  headerLinks: [
    {doc: 'digital-logic-design', label: 'First Year'},
    {doc: 'computer-systems', label: 'Schols'},
    {doc: 'algorithms-and-data-structures', label: 'Second Year'},
    {doc: 'advanced-telecommunications', label: 'Third Year'},
    {doc: 'human-factors', label: 'Fourth Year' },
    {doc: 'internet-of-things', label: 'Fifth Year'},,
    {href: 'https://glassrooms.cs-exams.com', label: 'Glass Rooms' },
  ],
  contributors,
  /* path to images for header/footer */
  headerIcon: 'img/cs-exams.svg',
  footerIcon: 'img/cs-exams.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#222222',
    secondaryColor: '#444444',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Geoffrey Natin',
  gaTrackingId: "UA-94068209-4",
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/nating/cs-exams',
  editUrl: 'https://github.com/nating/cs-exams/edit/master/docs/',
};

module.exports = siteConfig;
