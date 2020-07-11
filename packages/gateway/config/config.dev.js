const { graphql } = require("graphql");

const{ PORT }= process.env;

module.exports= {
    port : PORT || 3000
};