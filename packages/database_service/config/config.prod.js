

const{ PORT }= process.env;

module.exports= {
    port : PORT || 4000,
    mongoURI: 'mongodb://localhost'
};