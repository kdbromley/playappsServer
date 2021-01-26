const supertest = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /apps endpoint', () => {
    it('returns a list of apps', () => {
        return supertest(app)
            .get('/apps')
            .expect(200)
            .expect('Content-Type', /json/)
    })
})