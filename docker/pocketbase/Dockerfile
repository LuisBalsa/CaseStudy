FROM alpine:3.16

RUN apk add --no-cache wget unzip

# Baixar PocketBase
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.14.3/pocketbase_0.14.3_linux_amd64.zip

# Descompactar PocketBase
RUN unzip pocketbase_0.14.3_linux_amd64.zip -d /usr/local/bin/

# Criar diretório para dados
RUN mkdir /pb_data

WORKDIR /usr/local/bin/

EXPOSE 8090

# Comando para iniciar o PocketBase
CMD ["./pocketbase", "serve", "--dir", "/pb_data"]
