const path= require('path');

const basepath = path.join(__dirname, '/packages');

module.exports = {
  apps : [

    //API Gateway
    {
    name:'Gateway',
    script: basepath + '/gateway/ser.js',
    watch: true,
    env: {
      PORT:3001,
      SERVICE_DB_PORT:4001,
      Q_URI:'amqp://jaxxmeno:z7coZ55d5s4V0wX8n3B5ATvK62QEa4x4@squid.rmq.cloudamqp.com/jaxxmeno'
    }
  }, 
  //DATABASE SERVICE
  {
    name:'DB Service',
    script: basepath + '/database_service/ser.js',
    watch: true,
    env:{
      PORT: 4001
    }
  },

  // MAILING SERVICE
  {
    name:'Mailing Service',
    script: basepath + '/mailing_service/index.js',
    watch: true,
    env:{
      Q_URI:'amqp://jaxxmeno:z7coZ55d5s4V0wX8n3B5ATvK62QEa4x4@squid.rmq.cloudamqp.com/jaxxmeno'
    }
  }

]
};




/*
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }*/

