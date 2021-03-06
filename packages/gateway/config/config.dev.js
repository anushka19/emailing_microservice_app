//const { graphql } = require("graphql");
const {
    ApolloServer,
    gql
  } = require('apollo-server-express');

const{ PORT, SERVICE_DB_PORT ,Q_URI}= process.env;

module.exports= {
    port : PORT || 3000,
    serviceDatabase:{
        port: SERVICE_DB_PORT || 4000
    },
    q :{
        uri: 
        Q_URI || 'blablah'  //'amqp://jaxxmeno:z7coZ55d5s4V0wX8n3B5ATvK62QEa4x4@squid.rmq.cloudamqp.com/jaxxmeno'
    }
};