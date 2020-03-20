# Sistema de Gerenciamento Empresarial da Solo Moveterras - soloSGE

## Instalando o Python, Pip e MySQL

Antes de tudo verifique se sua máquina já tem instalado o Python, Pip e MySQL

```console
python --version
pip --version
mysql --version
```
Caso não tenha os três instalados faça a instalação através dos repositórios oficiais:
- [Python](https://python.org.br/instalacao-linux/)
- [Pip](https://pypi.org/project/pip/)
- [MySQL](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

Feito essa verificação vamos para a instalação do [Pipenv](https://pypi.org/project/pipenv/)

## Instalação do Pipenv

```console
pip install pipenv 
```
```console
pipenv --version
```

Feito isso vamos para o próximo passo que é a instalação do projeto soloSGE

## Instalação do soloSGE

Clone o diretório:
```console
git clone https://github.com/Doginnn/2.Solo/tree/master/2.Projects/1.Python_Projects/soloSGE
```
Acesse até o diretório soloSGE e prossiga com os seguintes comandos:
```console
pipenv check
```
```console
pipenv shell
```
```console
pipenv sync
```