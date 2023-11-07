const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Express.js uygulama ayarları ve rotaları burada eklenir

  server.get('/custom-route', (req, res) => {
    res.send('Özel Express.js Rota');
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('Sunucu 3001 portunda çalışıyor.');
  });
});