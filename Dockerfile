FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY app.js app.js

RUN npm start