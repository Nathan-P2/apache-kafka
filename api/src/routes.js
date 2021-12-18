import express from 'express'

const routes = express.Router()

const messageValue = {
    name: "Nathan Pereira",
    id: 3208,
    purchases: [
        {
            agenda_id: 336,
            treinamento_nome: "Scrum Master"
        }
    ]
}

routes.post('/message', async (req, res) => {
    await req.producer.send({
        topic: 'new-purchase',
        messages: [
            {
                value: JSON.stringify(messageValue)
            }
        ]
    })

    return res.json({message: "Enviado com sucesso!"});
})

export default routes