/*type Mail{
    subject: String
    receiver: String
    content: String
    _id: String
}

const mockMails=[
    {
        subject:'My first Email',
        receiver: 'test@test.com',
        content:'Hello world'
    },
    {
        subject:'My Second Email',
        receiver: 'test@test.com',
        content:'Hello world'
    },
    {
        subject:'My third Email',
        receiver: 'test@test.com',
        content:'Hello world'
    }
];*/
const {
    ApolloServer,
    gql
  } = require('apollo-server-express');


const axios =require('axios');
const {serviceDatabase :{ port }} =require('../config');

const{ pushToMessageQ } =require('../Q/connect');

const hostname ='http://localhost';
const databaseURL = `${hostname}:${port}`;

const get = async path => (await axios.get(`${databaseURL}/${path}`)).data.payload;

/*
const getMails=async () => {
    const mails=(await axios.get(`${databseURL}mails`)).data.payload;
    return mails;
};

const getSingleMail = async id => {
    const mail = (await axios.get(`${databseURL}mails/${id}`)).data.payload;
    return mail;
}    const postSingleMail = async body => {
        const postedMail = (await axios.post(`${databseURL}mails`, {...body})).data.payload;

        return postedMail;
    };*/

const post = async (path,body) => 
(await axios.post(`${databaseURL}/${path}`,{...body })).data.payload;

 

module.exports = {
     Query : {
        mails : () => get('mails'),
        mail: (_,{ id } ) => get(`mail/${id}`)
     },
     Mutation:{
        mail: (_,args)=>{
            let result;
            let error;

            try{
                result =post('mails',args);
            }catch(e){
                error=e;
            }

            pushToMessageQ(JSON.stringify(args));

            return result || error;
        }
    }
 };