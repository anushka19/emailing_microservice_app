//const server =require('express');
//const{ graphqlExpress,graphiqlExpress} = require ('apollo-server');
//const bodyParser = require('body-parser')
//const { ApolloServer, gql } = require('apollo-server-express');
//const{ makeExecutableSchema }= require('graphql-tools')

const express = require('express');

const {
    ApolloServer,
    makeExecutableSchema
} = require('apollo-server');

const schema= require('./data/schema');
const app = express();
const {port} = require('./gql');



app.use(express.json());
app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost: ${port}`));



//app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
/*server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${ port }`));*/










  /*server.applyMiddleware({ app });
 */


  //.use(bodyParser.json())

//.use('/graphql', graphqlExpress({schema}))
//.use('/gq', graphiqlExpress({endpointURL:'/graphql'}))
//.listen(3000,() => console.log('listening'));

