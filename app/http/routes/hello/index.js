export default async function routes(app) {
  app.get('/hello', async (request, reply) => {
    return { hello: 'world' };
  });
}
