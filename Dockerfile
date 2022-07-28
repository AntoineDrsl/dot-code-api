FROM node:16.13.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --only=production
RUN npm run build

COPY . ./

CMD ["npm", "run", "start:prod"]

FROM node:16.13.0 as development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000