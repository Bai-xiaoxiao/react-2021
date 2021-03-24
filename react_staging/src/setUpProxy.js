// 这里需要写commonJs的语法
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: 'https://gateway.segmentfault.com',
      // 修改源，控制服务器接收到的请求头中Host的值
      // 不修改，Host值为：http://localhost:3000
      // 修改之后，Host值为：/
      // 可以起到一个欺骗服务器的作用
      changeOrigin: true,
      pathRewrite: {
        // 重写请求地址
        // 如果不重写，代理任然会执行
        // 不过服务端的请求地址会是: /api1/xxxxx
        // 真实接口地址前会带上/api1会导致接口404
        "^/api1": ''
      }
    }),
    proxy('/api2', {
      target: 'https://api.bilibili.com',
      changeOrigin: true,
      pathRewrite: {
        "^/api2": ''
      }
    })
  );
}