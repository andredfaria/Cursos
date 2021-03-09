const users = [
  { id: 1, name: 'Andre', email: 'adfariacarvalho@gmail.com' },
  { id: 2, name: 'Eu', email: 'andredefaria_@hotmail.com' }
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0]
  },

}
