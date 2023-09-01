# Build
FROM node:18-alpine as buildBase

COPY ./packages /packages
WORKDIR /packages/frontend


RUN yarn install \
    && yarn run build

# Production
FROM node:18-alpine
COPY --from=buildBase /packages /packages

ENTRYPOINT [ "node" ]
CMD [ ".output/server/index.mjs" ]