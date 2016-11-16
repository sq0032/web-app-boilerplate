FROM node:6.3

RUN npm install -g mocha

#Install npm packages
COPY package.json /app/package.json
WORKDIR /app
RUN npm install