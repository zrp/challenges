# Teste desenvolvedor Full Stack

## Instruções

para rodar o projeto, basta executar os seguintes comandos

```shell
cd path/to/directory
docker-compose -f docker-compose.dev.yml up --build 
```

## O que foi feito

- Back-end

## Decisões tecnicas

### Linguagem - Node.js (Express)

O uso de Node e express para o desenvolvimento da aplicação se deve a três fatores:

- Linguagem da qual ja tive contato
- Facilidade de integração com bancos não relacionais (Algo por qual tenho grande apreço)
- Utilização da thread não bloqueante
- Possibilidade de fácil utilização do paradigma de eventos.
- Melhor adptação para o socket.io dada a própria documentação oficial da biblioteca. Da qual utilizei muito pouco.

### Banco de dados - MongoDB

Pelo tamanho real do projeto, não julgo que seja necessário um banco de dados, algo como SQLLite já resolveria. Mas quis mostrar para os avaliadores minha competencia utilizando tal banco de dados.

No entanto, dado o objetivo final da aplicação, a utilização de tal banco pode ser bastante útil dada sua alta possibilidade de distribuição.

Vale lembrar que, toda a integração do banco esta atrás de uma interface, desta forma, o banco de dados vira apenas um detalhe vide seu desacoplamento com o restante da aplicação.

### Docker

Subi junto ao repositorio os arquivos Docker e docker-compose para que seja avaliada a minha lógica de criação de Containers.

## Processo

Devido a demandas pessoais, optei por me comprometer principalmente com a aplicação do servidor. Apesar de achar que os requisitos da aplicação sejam melhor resolvidos utilizando uma linguagem como Go, por não ter conhecimento pratico nesta linguagem optei por desenvolver rapidamente em Node.js.
Eu, particularmente, apesar de achar o conceito de thread não bloqueante algo  extremamente interessante, não gosto da sintaxe do node.js, e principalmente do processo de evolução deste para adotar o paradigma da orientação a objetos o que, por sua vez dificulta a manutenção de grandes projetos.
Acredito que a conexão com o cliente HTML foi feita de forma correta, mas por questões profissionais e pessoais, não consegui concretizar a regra de negocio a tempo de entregar o projeto por inteiro.
De qualquer forma, procurei mostrar minha logica de modelagem, meu pensamento sobre arquitetura do codigo e a utilização do padrão de desacoplamento, login e autenticação. 
