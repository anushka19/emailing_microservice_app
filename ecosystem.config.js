const path= require('path');

const basepath = path.join(__dirname, '/packages');

module.exports = {
  apps : [{
    name:'Gateway',
    script: basepath + '/gateway/ser.js',
    watch: true,
    env: {
      PORT:3001,
      SERVICE_DB_PORT:4001
    }
  }, {
    name:'DB Service',
    script: basepath + '/database_service/ser.js',
    watch: true,
    env:{
      PORT: 4001
    }
  }]
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

