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
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Configuration', link: '/config/', ariaLabel: 'Config' },
          { text: 'API', link: '/api/', ariaLabel: 'API' },
          { text: 'Plugin', link: '/plugin/', ariaLabel: 'Plugin' }
        ],
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
          ],
          '/config/': [
            {
              title: 'Configuration',
              collapsable: false,
              children: ['']
            }
          ],
          '/api/': [
            {
              title: 'API',
              collapsable: false,
              children: ['']
            }
          ],
          '/plugin/': [
            {
              title: 'Plugin',
              collapsable: false,
              children: ['']
            },
            {
              title: 'Develop Plugin',
              collapsable: false,
              children: ['develop-plugin']
            }
          ]
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: '内容有更新',
            buttonText: '刷新'
          }
        },
        algolia: {},
        nav: [
          { text: '指南', link: '/zh/guide/', ariaLabel: 'Guide' },
          { text: '配置', link: '/zh/config/', ariaLabel: 'Config' },
          { text: 'API', link: '/zh/api/', ariaLabel: 'API' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: ['', 'directory-and-convention', 'configuration', 'debug']
            },
            {
              title: '进阶',
              collapsable: false,
              children: ['unit-test', 'production']
            }
          ],
          '/zh/config/': [
            {
              title: '配置',
              collapsable: false,
              children: ['']
            }
          ],
          '/zh/api/': [
            {
              title: 'API',
              collapsable: false,
              children: ['']
            }
          ],
          '/zh/plugin/': [
            {
              title: '插件',
              collapsable: false,
              children: ['']
            },
            {
              title: '开发插件',
              collapsable: false,
              children: ['develop-plugin']
            }
          ]
        }
      }
    }
  }
}
