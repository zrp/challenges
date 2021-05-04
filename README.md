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

### Banco de dados - MongoDB

Pelo tamanho real do projeto, não julgo que seja necessário um banco de dados, algo como SQLLite já resolveria. Mas quis mostrar para os avaliadores minha competencia utilizando tal banco de dados.

No entando, dado o objetivo final da aplicação, a utilização de tal banco pode ser bastante útil dada sua alta possibilidade de distribuição.

Vale lembrar que, toda a integração do banco esta atrás de uma interface, desta forma, o banco de dados vira apenas um detalhe vide seu desacoplamento com o restante da aplicação.

### Docker

Subi junto ao repositorio os arquivos Docker e docker-compose para que seja avaliada a minha lógica de criação de Containers.

## Processo

Devido a demandas pessoais, optei por me comprometer principalmente com a aplicação do servidor. Apesar de achar que os requisitos da aplicação sejam melhor resolvidos utilizando uma linguagem como Go, por não ter conhecimento pratico nesta linguagem optei por desenvolver rapidamente em Node.js.
Eu, particularmente, apesar de achar o conceito de thread não bloqueante algo  extremamente interessante, não gosto da sintaxe do node.js, e principalmente
do processo de evolução deste para adotar o paradigma da orientação a objetos. No entanto, para os problemas e prazo o Node atendeu super bem.

Não consegui fazer a conexão entre o servidor e o link websocket conforme o solicitado. Independente do resultado do processo seletivo. Vou utilizar este exercicio para praticar tal abordagem.

