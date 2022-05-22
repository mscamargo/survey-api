import { server } from '#src/http-server.js'

const { PORT = 3000 } = process.env

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
