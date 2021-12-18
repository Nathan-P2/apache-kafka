## Kafka.js com microserviço para fluxo de carrinho de compras

### Tecnologias utilizadas:

- Express.js
- **Kafka.js & Apache Kafka**
- Molecular

### Fluxo de dados

- API criada utilizando Express é utilizada pra envio de dados através de Producers.

- Microserviço de controle do fluxo do carrinho de compras recebe dados através de Consumers, e envia uma resposta  para ser consumida novamente na API.