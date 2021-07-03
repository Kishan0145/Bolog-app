  
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER,
        pass:process.env.PASS,
    }
});

const welcomeEmail = (email,name)=>{
    transporter.sendMail({
        from:process.env.USER,
        to:email,
        subject:"It is a welcome mail",
        text:`Hey! ${name} Thank You for joining us as user. We will try our best to provide you the best user experience.
                                                                            with regards: Kishan Sharma`,
    },(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(`Email Sent ${info.response}`)
        }
    })
}
const contactEmail = (name,email,phone,message)=>{
    transporter.sendMail({
        from:process.env.USER,
        to:process.env.PASS,
        subject:" Notification! Someone Contacted you ",
        text:`name: ${name}
              email :${email}
              phone : ${phone}
              message : ${message}`,
    },(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(`Email Sent ${info.response}`)
        }
    })
}


module.exports = {welcomeEmail,contactEmail}
