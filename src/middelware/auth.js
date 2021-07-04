const  jwt = require("jsonwebtoken");
const User = require("../models/user")

const auth = async (req,res,next)=>{
    try{
        console.log("yes")
        const token = req.cookies.jwt;
<<<<<<< HEAD
        const decode = jwt.verify(token,`${process.env.TOKEN_SEC}`);
=======
        const decode = jwt.verify(token,"thisisaveryimportanttopic");
>>>>>>> parent of ba4ff61 (setting up for heroku)
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