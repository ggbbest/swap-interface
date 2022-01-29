const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/subgraph', {
      target: 'https://subgraph.c4ei.net',
      pathRewrite: {
        '^/subgraph':''
      },
      changeOrigin: true
    })
  )
  
//   app.use(
//     createProxyMiddleware('/다른context', {
//       target: 'https://다른호스트',
//       pathRewrite: {
//         '^/지우려는패스':''
//       },
//       changeOrigin: true
//     })
//   )
  
};

