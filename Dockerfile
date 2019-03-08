FROM node:10-alpine

WORKDIR /api
COPY . /api
RUN yarn install

WORKDIR /web
COPY . /web
RUN yarn install

EXPOSE 80
ENTRYPOINT [ "/bin/sh", "-c" ]