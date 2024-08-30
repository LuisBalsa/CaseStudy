# Usando a imagem base do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração e instalar dependências
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copiar todos os arquivos da aplicação
COPY ./ ./

# Build da aplicação Next.js
RUN npm run build

# Expor a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
