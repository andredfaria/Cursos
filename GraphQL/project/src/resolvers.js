const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Simulação de dados
const users = [
  { id: 1, name: "Andre", email: "adfariacarvalho@gmail.com" },
  { id: 2, name: "Eu", email: "andredefaria_@hotmail.com" },
];

// Definindo o esquema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users(name: String): [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);

// Resolvers
const root = {
  users: ({ name }) => {
    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return users;
  },
  user: ({ id }) => users.find((user) => user.id == id),
  createUser: ({ name, email }) => {
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
    };
    users.push(newUser);
    return newUser;
  },
};

// Configurando o servidor Express
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Interface gráfica para testes
  })
);

// Iniciando o servidor
app.listen(4001, () =>
  console.log("Servidor GraphQL rodando em http://localhost:4000/graphql")
);
