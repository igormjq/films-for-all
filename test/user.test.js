import request from 'supertest'
import app from '../src/app'
import { refreshDatabase, generateTestUser } from './testHelpers'

beforeAll(async () => {
  await refreshDatabase();
  await generateTestUser();
});

describe('Test for /auth', () => {

  it('Should return token and user', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'tester@gmail.com',
        password: '123456',
      });

      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('user');
  });

})