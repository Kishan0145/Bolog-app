const mongoose = require("mongoose");
const User = require("./user")
const postShema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    publisher:{
        type:String,
        required:true,
        trim:true,
    },
    post : {
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:Date,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : User,
        },
})

const Post = mongoose.model("Post",postShema);
module.exports = Post;