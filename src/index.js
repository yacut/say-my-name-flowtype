/* @flow */
const _ = require('lodash');
const Hapi = require('hapi');

const Address = require('./lib/person').Address;
const FullName = require('./lib/person').FullName;

const server:Hapi.Server = new Hapi.Server();
const serverOptions: { port: number, host: string} = { port: 3000, host: 'localhost' };
server.connection(serverOptions);

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const address:Address = new Address('country', 'city', 'street', 123);
    address.zipCode = _.add(1000, address.zipCode);

    reply(`Hello, stranger! Your address is ${address.toString()}`);
  },
});

server.route({
  method: 'GET',
  path: '/{firstname}-{lastname}',
  handler(request, reply) {
    const fullName:FullName = new FullName(request.params.firstname, request.params.lastname);

    reply(fullName.getFullName());
  },
});

server.start((error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
