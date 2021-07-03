const express = require("express");
const router = express.Router();
const Contact = require("../models/contact")
const email = require("../../Email/email")
// contact page
router.get("/contact",(req,res)=>{
    res.render("Contact")
});

router.post("/contact", async (req,res)=>{
    const contact = new Contact({
        name:req.body.name,
        email:req.body.email,
        phone : req.body.phone,
        message:req.body.message,
    });
    try{
        console.log(contact);
        await contact.save();
        email.contactEmail(contact.name,contact.email,contact.phone,contact.message)
        res.render("Contact");
        // res.send(contact);
    }catch(e){
        res.status(500).send(e)
    }
});

module.exports = router;