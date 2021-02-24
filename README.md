# README

A dockerlized Shopify app with Rails API (backend) and Next.js (frontend).

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [docker-sync](http://docker-sync.io/)

## Development

### Build

```
docker-compose build
```

### Shutdown

```
docker-compose down
```

### Run

With stack

```
docker-compose up
```

### Commands for frontend

#### yarn add

```
docker-compose run frontend yarn add <NAME>
```

#### bundle install

```
docker-compose run backend bundle
```

#### rails c

Login to the running backend process

```
docker exec -it sinker_backend_1 sh
```

Run rails console

```
bundle exec rails c
```

### update credentials.yml.enc

Login to the running backend process

```
docker exec -it sinker_backend_1 sh
```

Update the file

```
EDITOR=vim bundle exec rails credentials:edit
```

#### binding.pry

Find `<CONTAINER ID>` of the running backend process

```
docker ps
```

Attach it to your terminal

```
docker attach <CONTAINER ID>
```

The process will pause at the breaking point with `binding.pry`