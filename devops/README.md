### Teste de infraestrutura

Este é o teste usado por nós aqui da ZRP para avaliar tecnicamente os candidatos a nossas vagas de devops. Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chegado aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail jobs@zrp.com.br.

Aqui na ZRP nós aplicamos este mesmo teste para as vagas em todos os níveis, ou seja, um candidato a uma vaga de devops júnior fará o mesmo teste de um outro candidato a uma vaga de devops sênior, mudando obviamente o nosso critério de avaliação do resultado do teste.

Nós fazemos isso esperando que as pessoas mais iniciantes entendam qual o modelo de profissional que temos por aqui e que buscamos para o nosso time. Portanto, se você estiver se candidatando a uma vaga mais iniciante, não se assuste, e faça o melhor que você puder!

### Instruções

Você deverá justificar muito bem as suas respostas, estabelecer métricas, diagramar soluções e não assumir que quem ler seu desafio fará pressuposto nenhum - **peque no detalhe, é melhor assim**.

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto.

Nós não definimos um tempo limite para resolução deste teste, o que vale para nós e o resultado final e a evolução da criação do projeto até se atingir este resultado.

Você pode escolher qual das etapas desenvolverá ou desenvolver todas, fica a seu critério.

#### Etapa 1 - Infra as a Service

Chegou um desafio novo para a área de infra estrutura! Subir um backend de um app.
Considerando que:

- Deve-se ter um único link para o backend
- Temos no mínimo dois bancos (seja relacional, em memória, grafos, não relacional e etc.)
- O código do backend é dinâmico baseado em NodeJs
- Ambiente de desenvolvimento já está dockerizado

Nos explique utilizando diagramas, texto, ou o que for, como você subirá essa infraestrutura na AWS (serviços que utilizará), e *quão caro ela sairá* considerando três fases da aplicação:

- 100 usuários no mês, pico de 10 em paralelo
- 10.000 usuários no mês, pico de 1000 em paralelo
- 100.000 usuários no mês, pico de 10000 em paralelo

#### Etapa 2 - Automações

Nos explique como e utilizando qual ferramenta vc automatizaria um processo de deploy para uma infraestrutura de micro serviços.

#### Etapa 3 - Segurança

Supondo que você tenha que implementar uma política de controle de acessos e proteção de senhas em uma equipe crescente. Nos conte como você restringiria e controlaria os acessos considerando:

- 2 pessoas na mesma equipe, todos tem acesso a tudo
- 10 pessoas na mesma equipe, em dois squads, todos devem ter acesso a tudo
- 30 pessoas na mesma equipe, seis squads, cada squad deve ter acesso apenas a recursos que eles precisarem desenvolver e com nível restrito de acesso

### O que iremos avaliar

- Clareza das explicações
- Uso de referências bem definidas
- Boa previsibilidade de custos
- Sensatez com a complexidade da solução
- Diagramas bonitinhos =
