const mongoose = require('mongoose');
//const mailSchema = require('../db_utils/Models/Mail');
const Mail = mongoose.model('Mail');

const MailHandler=async ({ body:{ subject, receiver , content}},  res) => {
    let mail;
    let error;
    
    if (!subject || !receiver || !content){
        res.sendStatus(400).send({
            message : 'You forget some import key',
            service: 'Database Service',
            status: 400,
            payload : null
        })
    };


    const newmail = new Mail({
    subject: subject,
    receiver: receiver,
    content: content
    });

    try{
        mail= await newmail.save();
    }catch(err){
            error=err;
        }


    res.send ({
        message:'Got response fron DB',
        service:'Database Service',
        status:200,
        payload: mail || error
        
    })
   
}
module.exports =server =>{
    server.post('/mails',MailHandler);
};