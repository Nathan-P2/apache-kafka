## Kafka.js com micro-serviço para fluxo de carrinho de compras

### Tecnologias utilizadas:

- Express.js
- **Kafka.js & Apache Kafka**

### Fluxo de dados

- API criada utilizando Express é utilizada pra envio de dados através de Producers.

- Micro-serviço de controle do fluxo do carrinho de compras recebe dados através de Consumers, e envia uma resposta  para ser consumida novamente na API.
