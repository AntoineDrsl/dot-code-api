FROM node:16.13.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json /usr/src/app

RUN npm install --only=production
RUN ls
RUN npm run build

COPY . /usr/src/app

CMD ["npm", "run", "start:prod"]

FROM node:16.13.0 as development

WORKDIR /usr/src/app
COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000