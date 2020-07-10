/*type Mail{
    subject: String
    receiver: String
    content: String
    _id: String
}*/

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
];

module.exports = {
     Query : {
        mails : () => mockMails
     }
 };