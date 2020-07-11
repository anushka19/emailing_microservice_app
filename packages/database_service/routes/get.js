const mongoose = require('mongoose');
const mailSchema = require('../db_utils/Models/Mail');
const Mail = mongoose.model('Mail');

module.exports=server => {
    server.get('/',async(_,res)=> {
        const m= new Mail({
            subject: 'Hello Subj',
            receiver:'test@test.com',
            content:'Hello cpntent'
        });
        await m.save();

        res.send('worked');
    });
};