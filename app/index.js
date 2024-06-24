import { fastify } from './http/index.js';

await Promise.all([fastify.listen({ host: '0.0.0.0', port: 3000 })]);