'use strict'

import collections from "./collections/index.js"
import user from "./user/index.js"

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.register(collections, {prefix: 'collection'})
}
//fastify.register(user, {prefix: 'user'})