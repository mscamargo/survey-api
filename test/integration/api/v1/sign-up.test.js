const request = require('supertest')
const server = require('#src/http-server.js')

describe('POST /v1/signup', () => {
  context('when name is not present', () => {
    it('should return a response with status 400 and correct validation error', async () => {
      await request(server)
        .post('/v1/signup')
        .send({})
        .expect(400, {
          errors: [
            {
              location: 'body',
              message: 'is required',
              param: 'name'
            }
          ]
        })
    })
  })

  context('when name is blank', () => {
    it('should return a response with status 400 and the correct validation error', async () => {
      await request(server)
        .post('/v1/signup')
        .send({
          name: ''
        })
        .expect(400, {
          errors: [
            {
              location: 'body',
              message: 'must not be blank',
              param: 'name'
            }
          ]
        })
    })
  })
})
