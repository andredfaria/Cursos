import request from 'supertest'
import { getConnection } from 'typeorm';
import { app } from '../app'

import createConnection from "../database";

describe("Survey", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();  
  })

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  })

  it('Shold be able to create a new survey', async () => {
    const response = await request(app).post('/survey')
      .send({
        title: "Title example",
        description: "Description Example"
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Shold be able to get all survey', async () => {
    await request(app).post('/survey')
      .send({
        title: "Title example 2",
        description: "Description Example 2"
      });

    const response = await request(app).get('/survey');
    
    expect(response.body.length).toBe(2);
  });
})