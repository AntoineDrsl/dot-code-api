FROM node:16.13.0 as development

WORKDIR /usr/src/app
COPY package*.json .

RUN npm install

COPY . .

FROM node:16.13.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json .

RUN npm install --only=production

COPY . .

COPY --from=development ./usr/src/app/dist ./dist

CMD ["node", "dist/main"]