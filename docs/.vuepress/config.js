module.exports = {
  serviceWorker: true,
  base: '/express-api-bootstrap/',
  title: 'Express Api Bootstrap',
  locales: {
    '/': {
      lang: 'en-US',
      description:
        'express-api-bootstrap makes it easy to create stand-alone, production-grade express based API servers that you can "just run"'
    },
    '/zh/': {
      lang: 'zh-CN',
      description:
        'express-api-bootstrap 使开发API service更轻松。你要做的，就是关注业务，然后运行。剩下的，我们为您搞定'
    }
  },
  themeConfig: {
    repo: 'leftstick/express-api-bootstrap',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
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
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文'
      }
    }
  }
}
