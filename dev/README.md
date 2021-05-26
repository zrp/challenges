### iHeros - Teste Fullstack
    
Este é o teste usado por nós aqui da ZRP para avaliar tecnicamente os candidatos a nossas vagas de desenvolvedores Fullstack. Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chegado aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail jobs@zrp.com.br.

Aqui na ZRP nós aplicamos este mesmo teste para as vagas em todos os níveis, ou seja, um candidato a uma vaga de dev júnior fará o mesmo teste de um outro candidato a uma vaga de dev sênior, mudando obviamente o nosso critério de avaliação do resultado do teste e nossa expectativa de passos entregues.

Nós fazemos isso esperando que as pessoas mais iniciantes entendam qual o modelo de profissional que temos por aqui e que buscamos para o nosso time. Portanto, se você estiver se candidatando a uma vaga mais iniciante, não se assuste, e faça o melhor que você puder e os passos que conseguir!

### Instruções

Você deverá criar um fork deste projeto, e desenvolver em cima do seu fork. **Use o README principal do seu repositório para nos contar como foi resolver seu teste**, as decisões tomadas, como você organizou e separou seu código, e principalmente **as instruções de como rodar seu projeto**.

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto.

Nós não definimos um tempo limite para resolução deste teste, o que vale para nós e o resultado final e a evolução da criação do projeto até se atingir este resultado. Você deve alinhar junto com o RH **quais passos você irá implementar** e **quanto tempo você demorará para fazê-los**.
    

#### Descrição
> Rede de cadastro(test backend) e distribuição (test frontend) de heroes, levando em consideração o nível da ameaça que estaria atacando uma determinada região.

Você está no ano de 3150 e está a frente do setor de tecnologia responsável pelo desenvolvimento do sistema de gerenciamento de distribuição de heróis para combater ameaças. O sistema deve monitorar as alertas de ameças providas pela ONU e alocar os heróis para cada nova ameaça existente no globo terrestre, designando sempre claramente o mais próximo do local.

#### Etapas

Lembre-se de avisar o RH quais etapas você entregará e sua expectativa de prazo de entrega!

##### Nível 1 - Autenticação e Cadastro

Monte um sistema onde o usuário administrativo pode se cadastrar e se autenticar, para uma plataforma logada.

##### Nível 2 - CRUD

Na plataforma logada, o administrador deve consiguir cadastrar, editar, remover e listar heróis. Leia as próximas etapas para modelar corretamente os atributos de um herói.
##### Nível 3 - Alocação de heróis

Para essa parte do desafio, você deve ouvir as notificações de um sistema de emissão desenvolvido pela ONU que informa ameaças de maneira aleatória pelo globo.

O lider de operações do departamento de heróis ordenou as seguintes regras para garantir que as ameaças sejam devidamente resolvidas:
- Cada **Herói** e cada **Ameaça** tem um rank
- Os heróis devem ser alocados de acordo com sua localização (mais próximo sempre) e rank adequado ao nível de ameaças
- Após determinado tempo os heróis devem ser desalocados
- Os ranks são os seguintes:

**Heroes**
Classe S, A, B e C.

**Ameaças**
Nível God, Dragon, Tiger e Wolf.

- Herois do rank classe "S" tem prioridade sobre ameaças do tipo "God" - uma batalha com uma ameaça desse nível deve durar no mínimo 5 minutos e no máximo 10 minutos;
- Herois do rank classe "A" tem prioridade sobre ameaças do tipo "Dragon" - uma batalha com uma ameaça desse nível deve durar no mínimo 2 minutos e no máximo 5 minutos;
- Herois do rank classe "B" tem prioridade sobre ameaças do tipo "Tiger" - uma batalha com uma ameaça desse nível deve durar no mínimo 10 segundos e no máximo 20 segundos;
- Herois do rank classe "C" tem prioridade sobre ameaças do tipo "Wolf" - uma batalha com uma ameaça desse nível deve durar no mínimo 1 segundo e no máximo 2 segundos;

Você devera consumir um socket (construído utilizando o **socket.io** que retorna as informações das ameaças, cada ameça tem o seguinte formato de objeto:

``` 
{
    location: [{
        lat: -5.836597,
        lng: -35.236007,
    }],
    dangerLevel: 'Dragon',
    monsterName: 'Black Dragon',
}
```

A url do serviço de socket é a: 

`https://zrp-challenge-socket.herokuapp.com`

E o evento a ser escutado é o `occurrence` 

Caso queira referência de como se conectar ao websocket veja [esse link](https://socket.io/docs/client-api/).

##### Nível 4 - Histórico de ameaças

Nos mostre em uma tela bonita e chamativa qual herói combateu qual ameaça e quanto tempo durou a ameaça.

##### Nível 5 - Alocações inteligentes

Você pode alocar o dobro de heróis de ranking menor para lidar com uma ameaça de ranking superior caso eles estejam mais próximos que o herói devido da ameaça daquele nível. 

Ou seja, o dobro da força heroica é o suficiente para batalhar com a ameaça de nível superior. 

### Tecnologias 

**Frontend**

- Vue
- Angular
- React

**Backend**

- Node.Js
- Ruby
- Python
- Elixir
- C#
- Go
- PHP
- Java

Para persisitir os dados utilize o meio que achar mais conveniente :).

###  O que iremos avaliar

- Modelagem de Dados
- Domínio da Linguagem
- Legibilidade do Código
- Estrutura do Código
- Organização do Código
- Design Patterns
- Manutenibilidade do Código
- Testes Unitários e Cobertura de Testes
- Uso do git
- Virtualização e documentação do ambiente
