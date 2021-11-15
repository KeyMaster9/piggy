FROM node:14-alpine

WORKDIR /usr/src/app

COPY docker/watch /usr/bin/watch
RUN chmod +x /usr/bin/watch

CMD ["/usr/bin/watch"]