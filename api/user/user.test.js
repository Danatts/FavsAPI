require('dotenv').config();
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const connectDB = require('../../config/database');
const user = require('./user.model');

const request = supertest(app);

describe('User Endpoints', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await user.deleteMany();
    await mongoose.connection.close();
  });

  test('should create a new user', async () => {
    const res = await request
      .post('/api/user/')
      .send({
        email: 'danieltest@test.com',
        password: '1234',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
});
