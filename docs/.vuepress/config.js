module.exports = {
  locales: {
    '/': {
      lang: 'English',
      title: 'express-api-bootstrap',
      description:
        'express-api-bootstrap makes it easy to create stand-alone, production-grade express based API servers that you can "just run"'
    },
    '/zh/': {
      lang: '中文',
      title: 'express-api-bootstrap',
      description:
        'express-api-bootstrap 使开发API service更轻松。你要做的，就是关注业务，然后运行。剩下的，我们为您搞定'
    }
  },
  serviceWorker: true,
  base: '/express-api-bootstrap/',
  themeConfig: {
    repo: 'leftstick/express-api-bootstrap',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        algolia: {},
        nav: [{ text: 'Guide', link: '/guide/', ariaLabel: 'Guide' }],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: ['', 'directory-and-convention', 'configuration', 'debug']
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: ['unit-test', 'production']
            }
          ]
        }
      }
    }
  }
}
