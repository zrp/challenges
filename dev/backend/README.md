<div style="text-align: center;">
  <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="Nest.js Logo" width="200">
  <img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="Nest.js Logo" width="200">
</div>


Tecnologias Utilizadas:
- Nest.js (v8.0.0): Framework Node.js para construção de aplicativos escaláveis e eficientes.
- Prisma (v3.8.1): ORM (Object-Relational Mapping) para interação com banco de dados.
- Socket.IO (v4.3.1): Biblioteca para comunicação em tempo real usando WebSockets.

Estrutura de Pastas:
```
projeto
└── dev
    └── backend
        ├── src
        │   ├── auth
        │   ├── heros
        │   ├── history
        │   ├── utils
        │   ├── prisma
        │   ├── threats
        │   ├── user
        │   ├── app.module.ts
        │   ├── app.controller.ts
        │   ├── app.service.ts
        │   └── main.ts
        ├── prisma
        ├── README.md
        └── package.json
```

Instruções para Execução:

1. Certifique-se de ter o Node.js (v16.17.1) e o banco de dados (MySQL, PostgreSQL, etc.) instalados em sua máquina.

2. Faça o clone do repositório do projeto backend:
```
git clone https://github.com/chagas42/challenges
```

3. Acesse a pasta do projeto backend:
```
cd projeto/dev/backend
```

4. Instale as dependências do projeto:
```
npm install
```
5. Configure as variáveis de ambiente necessárias. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de acordo com o `.env.example`.

6. (Opcional) Se preferir, você pode executar o projeto usando o Docker. Certifique-se de ter o Docker instalado em sua máquina.

7. Na raiz do projeto backend, você tem o arquivo `docker-compose.yml`. Abra o terminal na pasta raiz e execute o seguinte comando para iniciar o container do banco de dados:

```
docker-compose up -d
```

8. Execute as migrações do banco de dados:

```
npx prisma migrate dev
```

9. Execute o projeto:
```
npm run start:dev
```

10. O servidor será iniciado e estará aguardando requisições na porta definida (geralmente 3000).








Observação: Certifique-se de que o serviço de banco de dados esteja em execução e que as configurações de conexão estejam corretas no arquivo `.env`.