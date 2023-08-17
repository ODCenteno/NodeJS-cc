const request = require('supertest');
const createApp = require('./../src/app');
const { models } = require('./../src/db/sequelize');

describe('tests for /users path', () => {
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

  describe('GET /users:id endpoint tests', () => {
    test('should return user info /users/:id', async () => {
      // Nos conectamos a la base de datos con sequelize para traer la información
      const user = await models.User.findByPk('1');

      const { statusCode, body } = await api.get(`/api/v1/users/${user.id}`);
      expect(statusCode).toEqual(200);
      expect(body.id).toEqual(user.id);
      expect(body.email).toEqual(user.email);
    })
  })

  describe('POST /users endpoint test', () => {
    test('should return 400 Bad request with invalid password', async () => {
      // Arrange
      const inputData = {
        email: 'hello@example.com',
        password: '-------'
      }
      // Act
      const response = await api.post('/api/v1/users').send(inputData); // importante poner el / inicial en la ruta
      // Assert
      expect(response.statusCode).toEqual(400);
      expect(response.body.message).toMatch(/password/);
    })

    test('should return 400 Bad request with invalid email', async () => {
      // Arrange
      const inputData = {
        email: 'hello.com',
        password: 'admin123'
      }
      // Act
      const response = await api.post('/api/v1/users').send(inputData); // importante poner el / inicial en la ruta
      // Assert
      expect(response.statusCode).toEqual(400);
      expect(response.body.message).toMatch(/email/);
    })

    // TODO: test with valid data
  })
  describe('PUT /users endpoint test', () => {

  })
  describe('DELETE /users endpoint test', () => {

  })

  afterEach(() => {
    server.close();
  })
});

// agregando

// corremos los test en la terminal con npm run e2e
