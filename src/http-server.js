import http from 'node:http'

const server = http.createServer()

server.on('request', (request, response) => {
  let body = ''

  request.setEncoding('utf-8')

  request.on('data', chunk => {
    body += chunk
  })

  request.on('end', () => {
    const data = JSON.parse(body)

    if (data.name === undefined || data.name === null) {
      response.writeHead(400, { 'Content-Type': 'application/json' })
      return response.end(
        JSON.stringify({
          errors: [
            {
              location: 'body',
              message: 'is required',
              param: 'name'
            }
          ]
        })
      )
    }

    if (data.name === '') {
      response.writeHead(400, { 'Content-Type': 'application/json' })
      return response.end(
        JSON.stringify({
          errors: [
            {
              location: 'body',
              message: 'should not be blank',
              param: 'name'
            }
          ]
        })
      )
    }
  })
})

export { server }
