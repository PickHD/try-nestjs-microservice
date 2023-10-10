FROM node:alpine3.18

WORKDIR /app

COPY ./math-service/package*.json ./

RUN npm install

COPY ./math-service .

RUN npm run build

CMD [ "npm", "run", "start:prod"]