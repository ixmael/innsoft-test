# Build
FROM node:18-alpine as buildBase

COPY ./packages /packages

WORKDIR /packages/backend


RUN yarn install \
    && yarn run build

# Production setup
FROM node:18-alpine as productionBase

COPY --from=buildBase /packages/backend/dist /packages/backend/dist

COPY ./packages/core /packages/core
COPY ./packages/backend/.env /packages/backend
COPY ./packages/backend/package.json /packages/backend

WORKDIR /packages/backend

RUN yarn install --production

# Production container
FROM node:18-alpine

COPY --from=productionBase /packages/backend /packages/backend

WORKDIR /packages/backend

ENTRYPOINT ["yarn"]
CMD ["start:prod"]
