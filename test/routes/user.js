'use strict';

const supertest = require('supertest');
const app = require('../../index');
const request = supertest(app);

describe('POST requests to "/user"', () => {
  it('should respond with "user created"', (done) => {
    request
      .post('/user')
      .expect(201)
      .expect('"created user"', done);
  });
});

describe('GET requests to "/user"', () => {
  it('should respond with "user"', (done) => {
    request
      .get('/user')
      .expect(200)
      .expect('"user"', done);
  });
});

describe('PUT requests to "/user"', () => {
  it('should respond with "user updated"', (done) => {
    request
      .put('/user')
      .expect(200)
      .expect('"user updated"', done);
  });
});

describe('DELETE requests to "/user"', () => {
  it('should respond with "user deleted"', (done) => {
    request
      .delete('/user')
      .expect(200)
      .expect('"user deleted"', done);
  });
});
