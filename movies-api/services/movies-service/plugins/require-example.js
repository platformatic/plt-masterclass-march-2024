/// <reference path="../global.d.ts" />
'use strict'

const fp = require('fastify-plugin')

/** @param {import('fastify').FastifyInstance} fastify */
module.exports = fp(async function (fastify, opts) {
  fastify.log.info({ example: fastify.example }, 'example2 plugin')
}, {
  name: "example2",
  dependencies: ['example']
})
