---

# Case Study - Fullstack Monorepo Application

Este projeto é uma aplicação fullstack desenvolvida como um monorepo, que inclui uma aplicação web utilizando Next.js com Firebase, tudo gerido via Docker e Docker Compose.

## Descrição

O projeto é organizado em um monorepo e inclui os seguintes componentes:

1. **Web App (`packages/web`)**: Desenvolvida com Next.js e integrada com Firebase para autenticação e armazenamento.
2. **Docker e Docker Compose**: Utilizados para orquestrar o ambiente de desenvolvimento e produção, garantindo que todos os serviços sejam inicializados corretamente.

## Estrutura do Projeto

- **`packages/web`**: Contém a aplicação web Next.js com Firebase.
- **`Dockerfile`**: Define a imagem Docker para a aplicação web.
- **`docker-compose.yml`**: Orquestra a aplicação e outros serviços, como Firebase emuladores (se necessário).

## Demonstração

Aqui está uma demonstração da aplicação web em funcionamento, incluindo o processo de login via Google OAuth:

![Peek 2024-09-03 10-23](https://github.com/user-attachments/assets/3b760f76-37f4-4b1e-ab75-46ead08dbfd6)

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- **Docker** e **Docker Compose**
- **Node.js** (opcional, se desejar rodar localmente sem Docker)
- **npm** ou **yarn**

## Configuração Inicial

Após clonar o repositório, você precisará preencher os arquivos `.env` na pasta `packages/web`.

### 1. Clonar o Repositório

```bash
git clone https://github.com/LuisBalsa/CaseStudy.git
cd CaseStudy
```

### 2. Preencher o Arquivo `.env`

Antes de rodar o Docker Compose, preencha o arquivo `.env` com os valores apropriados:

#### `packages/web/.env`

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

> **Nota:** As variáveis de ambiente para o Firebase precisam ser configuradas corretamente para que a aplicação funcione. Não inclua essas informações sensíveis no repositório público.

## Executar a Aplicação

### Usando Docker

A maneira mais fácil de rodar toda a aplicação é utilizando Docker Compose. Isso garante que todos os serviços sejam inicializados corretamente com as configurações necessárias.

1. **Construir e Iniciar os Containers**

   Execute o seguinte comando na raiz do repositório para construir as imagens Docker e iniciar todos os serviços:

   ```bash
   docker-compose up --build -d
   ```

2. **Acessar a Aplicação**

   - **Web App**: Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação web.

### Rodar Localmente (Sem Docker)

Se você preferir rodar o projeto localmente sem Docker:

1. **Navegue até a pasta `web`**

   ```bash
   cd packages/web
   ```

2. **Instale as dependências e rode o servidor:**

   ```bash
   yarn install
   yarn dev
   ```

   A aplicação web estará acessível em [http://localhost:3000](http://localhost:3000).

