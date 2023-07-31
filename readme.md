# Antecipacao de Saldo para o Motorista

Este projeto é a API criada em Node.Js para integrar com a aplicação front end que permite a antecipação de saldo através do fluxo de viagens do Motorista no aplicativo da fretebras.

![ímage](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)

Técnologias utilizadas:

- Node.JS
- Typescript
- Express.JS
- Typeorm
- PostgreSQL

Para utilzar as funções de backend será necessário um container com um banco de dados Postgres. Uma forma de criar um container é rodar o script a baixo no terminal.

```bash
docker run -d --name guarantordb -p 5432:5432 -e POSTGRES_PASSWORD=hackathon -v pgdata:/var/lib/postgresql/data postgres
```

Outro ponto importante é informar as variaveis de ambiente obrigatórias. Comforme o exemplo a baixo.

```bash
  PORT=3333
  DB_HOST=localhost
  DB_PORT=5432
  DB_PASSWORD=hackathon
  DB_NAME=postgres
  DB_USER=postgres
```

Como dados de exemplo, estamos usando uma base de caminhoneiros (person) e a informação processada e ponderada da jornada do caminhoneiro (freight_register). Os arquivos estão disponíveis na raiz do projeto, e poderá ser utilizada pra pré-popular o banco.

## Running locally ▶️

#### Clone the project

```bash
  git clone git@github.com:yuridevops/hackathon-frete-api.git
```

Go to the project directory

```bash
  cd hackathon-frete-api
```

Install dependencies

```bash
  yarn install
```

#### Build application

```bash
  yarn build
```

Run migrations

```bash
  yarn global add typeorm reflect-metadata
  npx typeorm migration:run
```

#### Start the project with backend

```bash
  yarn dev
```

or

```bash
  npm dev
```

Access standalone remote application: `http://localhost:3333/`

## Running Lint

To run lint, run the following command

```bash
  yarn lint
```

## Related

Here are some related projects

[Hackathon Frete Frontend](https://github.com/yuridevops/hackathon-frete/)
<br/>

## Licence

[ISC](https://www.isc.org/licenses/)
