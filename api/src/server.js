import express from 'express'
import { Kafkajs } from 'kafkajs'
import routes from './routes'

const app = express()

app.use(routes)

app.listen(3000);