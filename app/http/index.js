import Fastify from 'fastify';
import { registerRoutes } from './routes/index.js';

export const fastify = Fastify({
  logger: true
});

registerRoutes(fastify);
