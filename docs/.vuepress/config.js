module.exports = {
  title: 'express-api-bootstrap',
  description: 'Declarative way for API server',
  serviceWorker: true,
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
