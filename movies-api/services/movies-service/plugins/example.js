/// <reference path="../global.d.ts" />
'use strict'

const fp = require('fastify-plugin')

/** @param {import('fastify').FastifyInstance} fastify */
module.exports = fp(async function (fastify, opts) {
  fastify.decorate('example', 'foobar2')
}, {
  name: "example"
})
