<h1 align="center">NPS-API</h1>

<br>

# 💻 Projeto

O NPS-NLW é uma aplicação que consiste em calcular o NPS da empresa. Aprendendo conceitos sobre o que é um API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail.

# 🔨 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [VSCode](https://code.visualstudio.com/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)

# 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn` ou `npm install`
- Inicie o servidor com `yarn dev` ou `npm run dev`
- Execute `yarn typeorm migration:run` para criar as migrations

A aplicação pode ser acessada em [`localhost:4321`](http://localhost:4321).

<br>

# 🕸 Diagrama

<img src="public/diagrama.png" alt="Diagrama da aplicação" />

<br>
<br>
<br>

<hr>

# ⛓ Rotas

## routes POST
- <h2>'/users'</h2>
```
{
	"name": "Andre",
	"email": "andre@gmail.com"
}
```

- <h2>'/surveys'</h2>
```
{
	"title": "NPS",
	"description": "Seu nps"
}
```
- <h2>'/sendMail'</h2>
```
{
	"email": "andre@gmail.com",
	"survey_id": "042727f8-833e-4481-a3eb-828939a531f2"
}
```

## routes GET

- <h2>'/surveys'</h2>

- <h2>'/answers/:value'</h2>

- <h2>'/nps/:survey_id'</h2>


## 📄 Licença

Esse projeto está sob a licença MIT.
---