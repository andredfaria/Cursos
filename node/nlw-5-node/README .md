<h1 align="center">CHAT-API</h1>

<br>

# 💻 Projeto



# 🔨 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [VSCode](https://code.visualstudio.com/)
- [Socket.io](https://socket.io/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)

# 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn` ou `npm install`
- Inicie o servidor com `yarn dev` ou `npm run dev`
- Execute `yarn typeorm migration:run` para criar as migrations

A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).

<br>
<br>
<br>

<hr>

# ⛓ Rotas

## routes POST
- <h2>'/users'</h2>
```
{
	"email": "andre@gmail.com"
}
```

- <h2>'/settings'</h2>
```
{
	"chat": "1",
	"username": "Andre"
}
```
- <h2>'/messages'</h2>
```
{
	"admin_id?": "042727f8-833e-4481-a3eb-828939a531f2",
	"text": "Olá",
    "user_id": "042727f8-833e-4481-a3eb-828939a531f2"
}
```

## routes GET

- <h2>'/surveys'</h2>

- <h2>'/answers/:value'</h2>

- <h2>'/nps/:survey_id'</h2>


## 📄 Licença

Esse projeto está sob a licença MIT.
---