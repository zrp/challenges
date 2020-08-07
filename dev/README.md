### iHeros - Teste Fullstack
    
Este é o teste usado por nós aqui da ZRP para avaliar tecnicamente os candidatos a nossas vagas de desenvolvedores Fullstack. Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chegado aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail jobs@zrp.com.br.

Aqui na ZRP nós aplicamos este mesmo teste para as vagas em todos os níveis, ou seja, um candidato a uma vaga de dev júnior fará o mesmo teste de um outro candidato a uma vaga de dev sênior, mudando obviamente o nosso critério de avaliação do resultado do teste.

Nós fazemos isso esperando que as pessoas mais iniciantes entendam qual o modelo de profissional que temos por aqui e que buscamos para o nosso time. Portanto, se você estiver se candidatando a uma vaga mais iniciante, não se assuste, e faça o melhor que você puder!

### Instruções

Você deverá criar um fork deste projeto, e desenvolver em cima do seu fork. Use o README principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código, e principalmente as instruções de como rodar seu projeto.

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto.

Nós não definimos um tempo limite para resolução deste teste, o que vale para nós e o resultado final e a evolução da criação do projeto até se atingir este resultado.
    

#### Descrição
> Rede de cadastro(test backend) e distribuição(test frontend) de heroes, levando em consideração o nível da ameaça que estaria atacando uma determinada região.

Você está no ano de 3150 e está a frente do setor de tecnologia responsável pelo desenvolvimento do sistema de gerenciamento de distribuição de Heros para combater ameaças. O sistema deve monitorar o sistema de alertas de ameças provido pela ONU e alocar os herois para cada nova ameaça existente no globo terrestre. 

Para isso, será preciso implementar as seguintes funcionalidades:

 - Autenticação
 - Cadastre, edite, remova e liste herois
 - Aloque automaticamente o heroi mais adequado quando uma nova ameaça surgir.
 - Registre a desalocação de um heroi (entende-se por desalocação, o ato do heroi ja ter derrotado a ameaça, depois dele ter sido alocado).
 - Exiba o histórico de ameaças junto com quem foi o responsável por impedir a catástrofe.

Além disso, o lider de operações ordenou as seguintes regras para o desenvolvimento da aplicação:
- Cada **Hero** e **Ameaça** tem um rank
- Os herois devem ser alocados de acordo com sua localização (mais próximo sempre) e rank adequado ao nível de ameaças. 
- Os ranks são os seguintes:

**Heroes**
Classe S, A, B e C.

**Ameaças**
Nível God, Dragon, Tiger e Wolf.

- Herois do rank classe "S" tem prioridade sobre ameaças do tipo "God";
- Herois do rank classe "A" tem prioridade sobre ameaças do tipo "Dragon";
- Herois do rank classe "B" tem prioridade sobre ameaças do tipo "Tiger";
- Herois do rank classe "C" tem prioridade sobre ameaças do tipo "Wolf";

> Bônus: Alocar multiplos herois de ranks menores em uma mesma ameaça de rank maior. (Utilize a proporção que achar melhor).

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
