const mongoose = require('mongoose')
require("dotenv").config();//npm i dotenv to feed process fom .env environment
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DB connection is Sucessfull");})
    .catch((error)=>{console.log("Issue in DB Connection");
                    console.error(error.message);
                    process.exit(1);
                });
}

module.exports = dbConnect;