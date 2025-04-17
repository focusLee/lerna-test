// docs/.vuepress/config.js
module.exports = {
    title: 'My Documentation',
    description: 'A VuePress powered documentation site',
    themeConfig: {
      nav: [
        { text: 'Home4', link: '/' },
        { text: 'Guide1', link: '/guide/' },
      ],
      sidebar: [
        '/',
        '/guide/',
      ]
    },
    base: '/lerna-test/',
  }