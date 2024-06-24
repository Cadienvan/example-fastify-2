export default async function routes(app) {
  app.get('/readiness', async (request, reply) => {
    return 'OK';
  });
}
