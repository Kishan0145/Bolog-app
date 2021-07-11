const express = require("express");
const User = require("../models/user")
const bcrypt = require("bcrypt");
const auth = require("../middelware/auth");
const email = require("../../Email/email")
const router = express.Router();

// user login
router.get("/users", (req, res) => {
    res.render("create_account");
})

router.get("/users/login", (req, res) => {
    if(req.cookies.jwt){
      return res.redirect("/post/dashboard");
    }
    res.render("login")
})

router.post("/users", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 8),
    })
    try {
        const token = await user.generateToken();
        await user.save()
        email.welcomeEmail(user.email,user.name)
        res.cookie("jwt", token)
        res.redirect("/post/dashboard");
    } catch (e) {
        console.log(e)
        // res.status(500).send(e)
        res.render("create_account", { emailError: "Account already exist. Try with a different Email address. " })

    }
})

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        const token = await user.generateToken();
        if (!user) {
            return res.render("login", { error: "Unable to login, Kindly check your Email or Password" })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            // return res.send({error : "Unable to login"})
            return res.render("login", { error: "Unable to login, Kindly check your Email or Password" })
        }
        res.cookie("jwt", token)
        res.redirect("/post/dashboard")
    } catch (e) {
        // res.status(500).send({ error: "Unable to Login" });
        return res.render("login", { error: "Unable to login, Kindly check your Email or Password" })
    }
})

router.get("/logout",auth ,async(req, res) => {
    try {
        
        req.user.tokens = [];
        await req.user.save();
        res.clearCookie("jwt");
        res.redirect("/")
    } catch (e) {
        res.status(500).send(e);
    }
})
module.exports = router;