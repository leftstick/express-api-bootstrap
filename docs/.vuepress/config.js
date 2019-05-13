module.exports = {
  title: 'express-api-bootstrap',
  description: 'Declarative way for API server',
  serviceWorker: true,
  base: '/express-api-bootstrap/',
  themeConfig: {
    home: true,
    logo: '/favicon.png',
    nav: [
      { text: 'API', link: '/api/' },
      { text: 'Github', link: 'https://github.com/leftstick/express-api-bootstrap' }
    ],
    sidebar: {
      '/api/': ['']
    }
  }
}
