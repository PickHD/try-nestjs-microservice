FROM node:alpine3.18

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run build

CMD [ "npm", "run", "start:prod"]