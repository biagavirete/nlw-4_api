# API - NLW#4
Back-end application developed during Rocketseat's Next Level Week #4 :rocket:
NPS (Net Promoter Score) application, with user and surveys register, survey email sender and NPS calculator.

## Getting started

**Installing**
> Cloning the repository

```bash
$ git clone https://github.com/biagavirete/nlw-4_api.git
$ cd nlw4_api
```

**Running**
> Installing dependencies

```bash
$ yarn
```

> Start server

```bash
$ yarn dev
```

> Run tests

```bash
$ yarn test
```

## Routes

- POST http://localhost:3333/users
- POST http://localhost:3333/surveys
- POST http://localhost:3333/sendMail
- GET  http://localhost:3333/nps/78ac997a-057e-4f38-9141-77e80505c3e6
- GET  http://localhost:3333/surveys
- GET  http://localhost:3333/answers/1?u=d124f015-10fc-48c6-9d10-ecde05f243ff

## Built with

* Typescript
* Node.js
* Express
* TypeORM
* Nodemailer
* uuid-v4
* Jest
