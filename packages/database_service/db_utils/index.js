//const config = require("./config");
const { Mongoose } = require("mongoose");
const MailSchema = require('./Models/Mail');

const mongoose = require('mongoose');

module.exports= config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);

    mongoose.model('Mail',MailSchema);
}