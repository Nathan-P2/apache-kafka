import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'checkout',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR
})

const topic = 'new-purchase'
const consumer = kafka.consumer({ groupId: 'checkout-group' })

async function run() {
    await consumer.connect()
    await consumer.subscribe({ topic, fromBeginning: true })

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`)
        }
    })
}

run().catch(console.error)
