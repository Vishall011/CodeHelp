const { log } = require('console');
const mongoose = require('mongoose');

require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const connectWithDb = ()=>{
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log('DB Connection is successful');
    })
    .catch((error)=>{
        console.log('Error in Db Connection');
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = connectWithDb;