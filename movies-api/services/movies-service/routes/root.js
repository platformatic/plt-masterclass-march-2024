/// <reference path="../global.d.ts" />
/// <reference path="../moviesDb/moviesDb.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/example', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/upperMovies', {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              title: { type: 'string' }
            }
          }
        }
      }
    }
  }, async (request, reply) => {
    const movies = await request.moviesDb.getMovies()
    return movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title.toUpperCase()
      }
    })
  })
}
