//only sub here

const amqp= require('amqplib/callback_api');
const {q: { uri} } = require('../config');

module.exports =() =>{

    const q ='test_q';


amqp.connect( uri,
  (err,conn)=>{
    if(err) throw new Error(err);

    conn.createChannel((err,ch)=> {
        if (err) throw new Error(err);

        ch.assertQueue(q,{durable: true});

        ch.consume(
            q, 
            ({content}) => {
            let mail;

            try{

            const mail = JSON.parse(msg.content.toString());// we need not parse entire message we only need content

            } catch(e){
                console.log(e);

                mail = msg;
            }
            
            console.log('I RECEIVED A MAIL!!', mail);

            ch.ack(msg);
        },
        {noAck: false}
      );
    });  
  });

};
