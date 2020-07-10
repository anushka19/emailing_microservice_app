const {
  ApolloServer,
  makeExecutableSchema
} = require('apollo-server');

const resolvers =require ('./resolvers');


// syntax : type Query { hey: String! }
const typeDefs =`
  type Query {
    mails :[Mail]
    mail(subject: String!, receiver: String!): Mail
  }

  type Mutation{
    mail(subject: String!, receiver: String! , content: String! ):Mail
  }

  type Mail{
    subject: String
    receiver: String
    content: String
    _id: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = makeExecutableSchema ( { typeDefs , resolvers}) ;