# Sistema de Gerenciamento de Distribuição - Heros | SGD-Heros

Esse projeto está sendo muito importante pra mim pois está sendo um grande divisor de águas na minha carreira. Acabei de ficar desempregado e estou muito esperançoso. Acredito que pra ser um bom Desenvolvedor, devemos aprender a cada dia mais algo novo e nos aperfeiçoar sempre.

## As Tecnologias utilizadas nesse projeto são:

**Frontend**

- Bootstrap 4
- HTML5
- CSS3
- JavaScript

**Backend**

- Python 3.6
- Django 3.0

**Gerenciador de Pacotes**

- Pipenv

**Banco de Dados**

- SQLite

Resolvi utilizar essa Stack mesmo não sendo a indicada em alguma tecnologia por vocês mais o motivo não foi pra querer confrontar, mediante a complexidade e o curto prazo eu me senti mais seguro em utilizar essa Stack. Espero que possam entender e estou aberto a qualquer tipo de sugestão ou feedback.

Meu código não é um dos mais bonitos pois estou aprendendo muito ainda sobre esse mundo da programação mas o pouco que sei procuro utilizar ao máximo o padrão PEP 8 - Guia de Estilo Para Código Python que pode ser visto nesse [link](https://wiki.python.org.br/GuiaDeEstilo).



# Instruções para Rodar o projeto

Antes de tudo verifique se sua máquina já tem instalado o Python e o Pipenv

```console
python --version
pipenv --version
```
Caso não tenha os dois instalados faça a instalação através dos repositórios oficiais:
- [Python](https://python.org.br/instalacao-linux/)
- [Pipenv](https://pipenv.kennethreitz.org/en/latest/#install-pipenv-today)

Feito essa verificação vamos para a instalação do [Pipenv](https://pypi.org/project/pipenv/)

## Instalação do Pipenv

```console
pip install pipenv 
```
```console
pipenv --version
```

Feito isso vamos para o próximo passo que é a instalação do projeto SGD-Heros

## Instalação do SGD-Heros

- Clone o projeto para algum local do seu PC

- Entre na pasta que está o projeto e execute os comandos abaixo:

- Crie uma máquina virtual;
```console
pipenv --three
```
- Rode esse comando para checar se está tudo certo com a sua máquina virtual;
```console
pipenv check
```
- Rode esse comando para ativar sua máquina virtual;
```console
pipenv shell
```
- Com esse comando sua máquina virtual reconhecerá automaticamente os pacotes que estão em "requirements.txt" e vai instalar;
```console
pipenv sync
```
- Rode esse comando para criar o arquivo Pipenv.lock;
```console
pipenv lock
```
- Rode esse comando para atualizar os pacotes da sua aplicação.
```console
pipenv update
```

OBS: Caso tenha dúvida de como criar um ambiente virtual com o Pipenv veja esse [Tutorial](https://medium.com/code-rocket-blog/gerenciando-suas-depend%C3%AAncias-e-ambientes-python-com-pipenv-9e5413513fa6). Ele é o mais completo que ví até hoje.