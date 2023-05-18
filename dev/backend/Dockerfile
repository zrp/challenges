# Use a imagem oficial do MySQL
FROM mysql:8.0

# Defina as variáveis de ambiente do MySQL
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_ROOT_PASSWORD=teste123

# Copie um arquivo SQL de inicialização para a imagem
COPY init.sql /docker-entrypoint-initdb.d/
