<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


README do Projeto Backend (Nest.js com Prisma.io)
==================================================

Tecnologias Utilizadas:
- Nest.js: Framework Node.js para construção de aplicativos escaláveis e eficientes.
- Prisma: ORM (Object-Relational Mapping) para interação com banco de dados.
- Socket.IO: Biblioteca para comunicação em tempo real usando WebSockets.

Estrutura de Pastas:
```
projeto
└── dev
    └── backend
        ├── src
        │   ├── controllers
        │   ├── services
        │   ├── models
        │   ├── utils
        │   ├── migrations
        │   ├── app.module.ts
        │   └── main.ts
        ├── prisma
        ├── README.md
        └── package.json
```

Instruções para Execução:
------------------------------

1. Certifique-se de ter o Node.js e o banco de dados (MySQL, PostgreSQL, etc.) instalados em sua máquina.

2. Faça o clone do repositório do projeto backend:
```
git clone <URL_DO_REPOSITÓRIO>
```

3. Acesse a pasta do projeto backend:
```
cd projeto/dev/backend
```

4. Instale as dependências do projeto:
```
npm install
```

5. Configure as variáveis de ambiente necessárias. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de acordo com suas configurações.

6. Execute as migrações do banco de dados:
```
npx prisma migrate dev
```

7. Execute o projeto:
```
npm run start:dev
```

8. O servidor será iniciado e estará aguardando requisições na porta definida (geralmente 3000).

Observação: Certifique-se de que o serviço de banco de dados esteja em execução e que as configurações de conexão estejam corretas no arquivo `.env`.

## License

Nest is [MIT licensed](LICENSE).
