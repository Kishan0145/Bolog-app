const  jwt = require("jsonwebtoken");
const User = require("../models/user")

const auth = async (req,res,next)=>{
    try{
        console.log("yes")
        const token = req.cookies.jwt;
        const decode = jwt.verify(token,`${process.env.TOKEN_SEC}`);
        const user = await User.findOne({email: decode.email});
        if(!user){
            throw new Error("Please Authenticate")
        }
        req.user = user;
        next();
    }catch(e){
        res.status(500).render("404")
    }
};
module.exports = auth;