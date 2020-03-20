# Sistema de Gerenciamento de Distribuição - Heros

## Instalando o Python e Pipenv
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

Clone o diretório:
```console
git clone https://github.com/Doginnn/2.Solo/tree/master/2.Projects/1.Python_Projects/soloSGE
```
Acesse até o diretório SGD-Heros e prossiga com os seguintes comandos:
```console
pipenv check
```
```console
pipenv shell
```
```console
pipenv sync
```
```console
pipenv update
```