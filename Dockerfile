FROM node:18-alpine

WORKDIR /app

COPY packages/web/package.json ./packages/web/
COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY packages/web ./packages/web
COPY packages/shared ./packages/shared

WORKDIR /app/packages/web

EXPOSE 3000

CMD ["yarn", "dev"]
