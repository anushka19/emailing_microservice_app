

const{ PORT }= process.env;

module.exports= {
    port : PORT || 4040,
    mongoURI: 'mongodb://localhost'
};