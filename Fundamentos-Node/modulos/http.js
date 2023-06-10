const http = require('http');

const port = 3000;

function router(req, res) {
  switch (req.url) {
    case '/':
      res.end('<h1>Hola, Amigo!</h1>')
      break
    default:
      res.write('404! Esa url no existe.');
      res.end();
  }
}

const server = http.createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info('No se pudo establecer conexión con el servidor');
    console.error(err.message);
  }
  console.info(`> Ready on http://localhost:${port}`);
});

console.log(`Escuchando http en el puerto ${port}`);