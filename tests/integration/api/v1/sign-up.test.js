import test from 'node:test'
import assert from 'node:assert'

import { server } from '#src/http-server.js'

test('POST /v1/signup', async t => {
  server.listen(3000)

  await t.test('when the body param name is not provided', async t => {
    const request = new Request('http://localhost:3000/v1/signup', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'content-type': 'application/json'
      }
    })
    const response = await fetch(request)
    const data = await response.json()

    await t.test('should return a bad request status', async () => {
      assert.strictEqual(response.status, 400)
      assert.strictEqual(response.statusText, 'Bad Request')
    })

    await t.test(
      'should return an errors array with the correct validation error',
      () => {
        assert.deepStrictEqual(data, {
          errors: [
            {
              location: 'body',
              message: 'is required',
              param: 'name'
            }
          ]
        })
      }
    )
  })

  await t.test('when the body param name is blank', async t => {
    const request = new Request('http://localhost:3000/v1/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: ''
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    const response = await fetch(request)
    const data = await response.json()

    await t.test('should return a bad request status', async () => {
      assert.strictEqual(response.status, 400)
      assert.strictEqual(response.statusText, 'Bad Request')
    })

    await t.test(
      'should return an errors array with the correct validation error',
      () => {
        assert.deepStrictEqual(data, {
          errors: [
            {
              location: 'body',
              message: 'should not be blank',
              param: 'name'
            }
          ]
        })
      }
    )
  })
  server.close()
})
