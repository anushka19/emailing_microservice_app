const amqp= require('amqplib/callback_api');
const {q: { uri} } = require('../config');

const q ='test_q';
let channel=null;

amqp.connect( uri,
  (err,conn)=>{
    if(err) throw new Error(err);

    conn.createChannel((err,ch)=> {
        if (err) throw new Error(err);

        ch.assertQueue(q,{durable: true});

        channel=ch;

        //ch.sendToQueue(q, Buffer.from('Hello TEST CONSUMER')); //comp cannot store in strings so store in buffer
    });

    /*setTimeout(()=>{
      conn.close();

      process.exit(0);
    },1000)*/
    
  });
// it there are multiple queues then specify q,msg,ch and channel.assert queue  
const pushToMessageQ =msg =>{
  if(!channel) setTimeout(pushToMessageQ(msg),1000);

  channel.sendToQueue(q,Buffer.from(msg));

  return{ m: 'done' };
};

module.exports = {
  pushToMessageQ
}