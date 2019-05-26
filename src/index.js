const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  users: [User!]!
}

type User {
  id: ID!
  name: String!
  username: String!
}`

const resolvers = {
  Query: {
    users: () => ([{
      id: 123,
      name: 'Daenerys Targaryen',
      username: 'stormborn'
    }])
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))

