const fastify = require('fastify')({ logger: true });
const redis = require('redis');
const client = redis.createClient('redis://redis:6379');
client.set('foo', new Date());

fastify.get('/', (request, reply) => {
    client.get('foo', (err, redRply) => {
        console.log({ redRply })
        return reply.send({
            msg: redRply
        })
    });
});

const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port} or is it?`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
