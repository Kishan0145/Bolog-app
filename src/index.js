const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const contactRouter = require("./router/contact");
const postRouter = require("./router/post");
const userRouter = require("./router/user")
const Post = require("./models/post");
const methodOverride = require('method-override');
const bootbox = require("bootbox")
const cookieParser = require("cookie-parser");
require("./db/mongoose");

const port = process.env.PORT || 3000;
const viewPath = path.join(__dirname, "../tempelate/views")
const publicpath = path.join(__dirname, "../public");
const partailsPath = path.join(__dirname, "../tempelate/partials");

hbs.registerHelper('dateFormat', require('handlebars-dateformat'))
hbs.registerPartials(partailsPath);
hbs.registerHelper('trimString', function(passedString) {
    var theString =`${passedString.substring(0,40)}[...]`;
    return new hbs.SafeString(theString)
});

app.set("view engine", "hbs");
app.set("views", viewPath);

app.use(cookieParser());
app.use(express.static(publicpath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(contactRouter);
app.use(postRouter);
app.use(userRouter);
app.use(methodOverride('_method'));

// Home page
app.get("/", (req, res) => {
    res.render("index");
})

// about page
app.get("/about",(req,res)=>{
    res.render("About");
})

app.get("*",(req,res)=>{
  res.render("404");
})

app.listen(port, () => {
    console.log(`running at port ${port}`);
});
