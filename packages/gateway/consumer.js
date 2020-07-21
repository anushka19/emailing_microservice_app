const amqp= require('amqplib/callback_api');


const q ='test_q';

amqp.connect(uri ,(err,conn)=>{
    if(err) throw new Error(err);

    conn.createChannel((err,ch)=> {
        if (err) throw new Error(err);

        ch.assertQueue(q,{durable: true});

        ch.consume(q,
            msg =>{
            console.log('I GOT A MESSAGE',msg.content.toString()); // after adding content we will get only the message which converted to string so that it will be readable
       },
       {noAck : true });//for ack to delete from the queue and message is sent

   });
}
);