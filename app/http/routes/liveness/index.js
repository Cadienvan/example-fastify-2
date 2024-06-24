export default async function routes(app) {
  app.get('/liveness', async (request, reply) => {
    return 'OK';
  });
}
