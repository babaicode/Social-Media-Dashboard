FROM node:18-alpine

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node entrypoint.sh ./

RUN chmod +x ./entrypoint.sh

RUN apk --no-cache add curl
RUN apk add g++ make py3-pip

USER node
