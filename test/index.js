'use strict';

const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

describe('requests to "/"', () => {
  it('should respond with "Hello World"', (done) => {
    request
      .get('/')
      .expect(200)
      .expect('"Hello World"', done);
  });
});
