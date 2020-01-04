FROM node:11

WORKDIR /app

COPY package*.json ./

COPY ./.docker/entrypoint.sh /

RUN chmod +x /entrypoint.sh

EXPOSE 3000

USER node

ENTRYPOINT /entrypoint.sh