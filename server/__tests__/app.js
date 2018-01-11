const request = require('supertest')
const app = require('../app')

jest.mock('../models/contact')

describe('App', () => {
  it('Tests the root path', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })

  it('Lists contacts', () => {
    return request(app)
      .get('/contact')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.contact[0].name).toBe('Scott Cinatl')
      })
  })

  it('Creates contacts', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Monique Rico',
        email: 'monique@test.com',
        message: 'Good job lovey!',
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body.contact.name).toBe('Monique Rico')
        expect(response.body.contact.email).toBe('monique@test.com')
        expect(response.body.contact.message).toBe('Good job lovey!')
      })
  })

  it('Validates name when creating a contact', () => {
    return request(app)
      .post('/contact')
      .send({
        email: 'monique@test.com',
        message: 'Good job lovey!',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('name')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates email when creating a contact', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Monique Rico',
        message: 'Good job lovey!',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('email')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates message when creating a contact', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Monique Rico',
        email: 'monique@test.com',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('message')
        expect(error.msg).toBe('Is required')
      })
  })
})
