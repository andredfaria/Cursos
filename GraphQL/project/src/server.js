// https://www.youtube.com/watch?v=oD8GqurXZ-0
const { GraphQLServer } = require('graphql-yoga');
const path = require("path");
const resolvers = require('./resolvers.js')

const options = {
  port: 4000
}

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start(options, () => console.log("Servidor rodando na porta 4000"));
