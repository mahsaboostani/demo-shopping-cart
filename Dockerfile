FROM node:14.15.4-alpine

WORKDIR /app

COPY . .

EXPOSE 3000
ENV HOST 0.0.0.0

RUN apk update && \
    npm install -g @vue/cli