const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection Established Sucessfully")
}).catch(()=>{
    console.log("Unable to connect");
})