// docs/.vuepress/config.js
module.exports = {
    title: 'My Documentation',
    description: 'A VuePress powered documentation site',
    themeConfig: {
      nav: [
        { text: 'Home1', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ],
      sidebar: [
        '/',
        '/guide/',
      ]
    }
  }