
# Case Study - Fullstack Application

Este é um estudo de caso para uma aplicação fullstack desenvolvida utilizando Next.js, Expo e PocketBase, com autenticação via OAuth do Google.

## Descrição

O projeto é dividido em três partes principais:

1. **Backend (`my-next-backend`)**: Implementado com Next.js, responsável por servir a aplicação web e gerenciar as rotas de API.
2. **Frontend (`MyProject`)**: Implementado com Expo, responsável pela interface do usuário para dispositivos móveis e web.
3. **PocketBase (`docker/pocketbase`)**: Usado como backend para persistência de dados.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- **Docker** e **Docker Compose**
- **Node.js** (se desejar rodar localmente sem Docker)
- **npm** ou **yarn**

## Configuração Inicial

Após clonar o repositório, você precisará preencher os arquivos `.env` nas pastas `my-next-backend` e `MyProject`.

### 1. Clonar o Repositório

```bash
git clone https://github.com/LuisBalsa/CaseStudy.git
cd CaseStudy
```

### 2. Preencher os Arquivos `.env`

Antes de rodar o Docker Compose, preencha os arquivos `.env` com os valores apropriados:

#### `my-next-backend/.env`

```plaintext
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

#### `MyProject/.env`

```plaintext
GOOGLE_CLIENT_ID_WEB=
GOOGLE_CLIENT_ID_MOBILE=
```

> **Nota:** Os valores para `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` e outras variáveis sensíveis não estão preenchidos nos arquivos `.env` por razões de segurança. É uma boa prática não incluir informações sensíveis em repositórios de código público para evitar exposições acidentais. Portanto, esses valores devem ser preenchidos manualmente por quem for executar o projeto. Certifique-se de preencher essas variáveis antes de rodar o projeto para garantir que todos os serviços funcionem corretamente.

## Executando a Aplicação

### Usando Docker

A maneira mais fácil de rodar toda a aplicação é utilizando Docker Compose. Isso garante que todas as partes do sistema sejam inicializadas corretamente com as configurações necessárias.

1. **Subir os Contêineres**

   Execute o seguinte comando na raiz do repositório para iniciar todos os serviços:

   ```bash
   docker-compose up -d
   ```

2. **Acessar a Aplicação**

   - **Frontend**: Acesse [http://localhost:3001](http://localhost:3001) para ver a aplicação.
   - **Backend**: O backend estará acessível em [http://localhost:3000](http://localhost:3000).
   - **PocketBase**: A interface do PocketBase estará acessível em [http://localhost:8090](http://localhost:8090).

### Rodando Localmente (Sem Docker)

Se você preferir rodar o projeto localmente sem Docker:

1. **Backend**

   Navegue até a pasta `my-next-backend`:

   ```bash
   cd my-next-backend
   ```

   Instale as dependências e rode o servidor:

   ```bash
   npm install
   npm run dev
   ```

   O backend estará acessível em [http://localhost:3000](http://localhost:3000).

2. **Frontend**

   Navegue até a pasta `MyProject`:

   ```bash
   cd ../MyProject
   ```

   Instale as dependências e rode o Expo:

   ```bash
   npm install
   npm start
   ```

   O Expo abrirá uma interface onde você pode escolher rodar a aplicação no navegador, em um emulador ou em um dispositivo físico.

---
