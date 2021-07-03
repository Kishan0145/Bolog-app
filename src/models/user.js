const mongoose = require("mongoose");
const Post = require("./post")
const validator= require("validator");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email already exist")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
    },
    tokens:[{token: {
        type:String,
        required:true,
    }}],
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : Post,
    }],
})

userSchema.methods.generateToken = async function(){
    console.log("running");
    const user = this;
    const token = jwt.sign({email : user.email},process.env.TOKEN_SEC,{expiresIn:"1h"});
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

const User = new mongoose.model("User",userSchema);
module.exports=User;