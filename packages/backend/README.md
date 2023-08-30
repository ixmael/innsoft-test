# Innsoft backend test
This backend only register new users using [Nest](https://github.com/nestjs/nest) framework.

## Setup

### Database
You have to initialize the database. In the *migrations* path are the required queries for the database. As was required, this use **Postgres**.

I use [go migrate](https://github.com/golang-migrate/migrate) because is more simple that **sequelize** and this not gives an error.

```sh
migrate -database postgres://USER:PASSWORD@localhost:5432/DATABASE?sslmode=disable -path migrations up
```

### Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
