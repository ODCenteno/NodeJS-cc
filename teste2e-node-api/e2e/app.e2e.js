const request = require('supertest');
const createApp = require('./../src/app');

describe('tests for app', () => {
  // Preparamos el entorno de pruebas
  let app = null;
  let server = null;
  let api = null;

  beforeEach(() => {
    app = createApp();
    server = app.listen(9000);
    // Utilizamos "request" de Supertest para generar la API de prueba
    api = request(app);
  })

  test('GET /hello', async () => {
    // para enviar una petición utilizamos "api"
    const response = await api.get('/hello');

    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.name).toEqual('ginger creacket');
  })

  afterEach(() => {
    server.close();
  })
});

// agregando

// corremos los test en la terminal con npm run e2e
