# API - Rider

[![Dev Bagde](https://img.shields.io/badge/API-developer-sucess)]()
[![GPLv3 License](https://img.shields.io/badge/API-GraphQL-blueviolet)](https://graphql.org/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

Aplicação construida para criação de pedal, para participação de eventos e competições integrando esporte e tecnologia.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Type Graphql](https://typegraphql.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
- [TypeORM](https://typeorm.io/#/)
- [Postgres](https://www.postgresql.org/)

## Configuração e Instalação local

Para dar inicio a aplicação e realizar o desenvolvimento.

Realizar cópia do projeto local `git clone`

```bash
    # Acessar a pasta do projeto
    $cd api-rider

    # instalar dependencias
    $yarn

    # Iniciar as migrations do banco de dados
    $ yarn typeorm migration:run

    # Para iniciar a API
    $ yarn dev

    # Projeto em execução

    # Accesse a API em
    http://localhost:3000/graphql
```

## Author

_Jefferson da Silva Souza_ [:earth_americas:](https://www.github.com/octokatherine)
