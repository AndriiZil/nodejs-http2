'use strict';

const http2 = require('http2')
const fs = require('fs')
const router = require("./router");

const server = http2.createSecureServer({
  // we can read the certificate and private key from
  // our project directory
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
})

server.on('stream', router)

// listen to 8443 as a convention for HTTPS
server.listen(8443)
