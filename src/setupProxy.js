const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy requests to the first backend
  app.use(
    '/api1', // URL path that should proxy to the first server
    createProxyMiddleware({
      target: 'http://98.81.148.163:8080/function/luas-persegi', // Replace with the first IP address and port
      changeOrigin: true,
      pathRewrite: { '^/api1': '' }, // Optional: removes /api1 from the proxied request path
    })
  );

  // Proxy requests to the second backend
  app.use(
    '/api2', // URL path that should proxy to the second server
    createProxyMiddleware({
      target: 'http://3.91.191.102:8080/function/luas-permukaan-kubus', // Replace with the second IP address and port
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }, // Optional: removes /api2 from the proxied request path
    })
  );
};
