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
        req.token = token;
        next();
    }catch(e){
        if(e.message === "jwt expired" ){
            return res.render("login")
        }
        res.status(500).render("404")
    }
};
module.exports = auth;