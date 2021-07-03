const mongoose = require("mongoose");
const validator = require("validator");


const contactShema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim : true,
    },
    email :{
        type:String,
        required : true,
        lowercase : true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
    },
    phone :{
        type : String,
    },
    message : {
        type:String,
        required : true,
        maxlength : 250,
        trim:true,
    }
},{
    timestamps:true,
})

const Contact = mongoose.model("Contact",contactShema);
module.exports = Contact;