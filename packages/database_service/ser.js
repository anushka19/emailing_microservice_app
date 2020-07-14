//const server =require('express');
//const{ graphqlExpress,graphiqlExpress} = require ('apollo-server');
//const bodyParser = require('body-parser')
//const { ApolloServer, gql } = require('apollo-server-express');
//const{ makeExecutableSchema }= require('graphql-tools')

const express = require('express');
const config = require('./config');
 

const {port}= config;
const app = express();


//schema.applyMiddleware({app});
app.use(express.json());

require('./db_utils')(config);
require('./routes/get')(app);
require('./routes/post')(app);

app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000 HELLO`));



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

