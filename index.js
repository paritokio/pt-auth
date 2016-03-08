'use strict';

const port = process.env.PORT;
if (!port) throw new Error('Port needed !');

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port });
server.start((err) => {
  if (err) throw err;
  console.log('Server up !');
});
