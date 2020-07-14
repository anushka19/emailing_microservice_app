const express= require('express');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
const resolvers =require ('./resolvers');


// syntax : type Query { hey: String! } ,,,, mail(subject: String!, receiver: String!): Mail
const typeDefs =gql`
  type Query {
    mails :[Mail]
    mail(id:String!): Mail
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

/*const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});*/

module.exports = new ApolloServer ( { typeDefs , resolvers}) ;