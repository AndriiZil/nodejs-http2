'use strict';

const http2 = require('http2');
const router = require('./router');

// create a new server instance
const server = http2.createServer();

// log any error that occurs when running the server
server.on('error', (err) => console.error(err));

// the 'stream' callback is called when a new
// stream is created. Or in other words, every time a
// new request is received
server.on('stream', router)

// start the server on port 8000
server.listen(8000)
