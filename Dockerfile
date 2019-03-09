FROM node:10-alpine

WORKDIR /api
COPY . /home/api
RUN yarn install

WORKDIR /web
COPY . /home/web
RUN yarn install

EXPOSE 80
ENTRYPOINT [ "/bin/sh", "-c" ]