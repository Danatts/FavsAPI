require('dotenv').config();
const supertest = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../../app');
const connectDB = require('../../config/database');
const item = require('./item.model');

const request = supertest(app);

describe('Item Endpoints', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await item.deleteMany();
    await mongoose.connection.close();
  });

  test('should return error message: missing token', async () => {
    const res = await request
      .post('/api/item/')
      .send({
        title: "El Padrino",
        desc: "Película de Francis Ford Coppola",
        link: "fakeurl.com",
        favList: "628d2b965c6bc8d8673be885"
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: 'token not provided' })
  });

  test('should return error message: missing value', async () => {
    const res = await request
      .post('/api/item/')
      .send({
        title: "El Padrino",
        desc: "Película de Francis Ford Coppola",
        link: "fakeurl.com",
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: 'some missing value on request body' })
  });
});
