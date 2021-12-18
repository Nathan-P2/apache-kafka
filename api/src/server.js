import express from 'express'
import routes from './routes'
import { Kafka } from 'kafkajs'

const app = express()

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

app.use(routes)

async function run() {
    await producer.connect();

    app.listen(3000);
}

run().catch(console.error);
