const {
    ApolloServer,
    gql
  } = require('apollo-server-express');

const{ Q_URI}= process.env;

module.exports= {
    q :{
        uri: 
        Q_URI || 'blablah'  //'amqp://jaxxmeno:z7coZ55d5s4V0wX8n3B5ATvK62QEa4x4@squid.rmq.cloudamqp.com/jaxxmeno'
    }
};