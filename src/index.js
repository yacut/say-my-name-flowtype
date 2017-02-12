/* @flow */

const Hapi = require('hapi');
const Person = require('./lib/person');

const server = new Hapi.Server();
const serverOptions: { port: number, host: string} = { port: 3000, host: 'localhost' };
server.connection(serverOptions);

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    reply('Hello, world!');
  },
});

server.route({
  method: 'GET',
  path: '/{firstname}-{lastname}',
  handler(request, reply) {
    const fullName = new Person.FullName(request.params.firstname, request.params.lastname);
    reply(fullName.getFullName());
  },
});

server.start((error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
