const express = require("express")
const router = express.Router();
const Post = require("../models/post");
const auth = require("../middelware/auth");
// create a post
router.get("/", async (req, res) => {
    try {
        let skp = parseInt(req.query.skip) || 0;
        let lmt = parseInt(req.query.limit) || 5;
        const totalPost = await Post.find();
        if(!req.query.search){
            var  posts = await Post.find().skip(skp).limit(lmt);  
        }
        else{
            var posts = await Post.find( { "title": { "$regex": `${req.query.search}`, "$options": "i" } },
            function (err, docs) {
            }).skip(skp).limit(lmt);
        }
        if (skp >= totalPost.length) {
          return res.redirect("/");
        }
        skp = skp + 5;
        res.render("index", {
            posts: posts,
            skp,
            lmt,
        })
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get("/content/:id", async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id);
        res.render("post", {
            title: posts.title,
            post: posts.post,
        })
    } catch (e) {
        res.status(500).send(e);
    }
})
router.get("/post", auth, (req, res) => {
    res.render("create_post");
})


router.get("/post/dashboard", auth, async (req, res) => {
    try {

        const posts = await Post.find({owner:req.user._id})
        res.render("dashboard", {
            posts: posts
        });
    } catch (e) {
        res.send(e);
    }
}, (error, req, res, next) => {
    res.status(500).send({ error: error.message })
});

router.post("/post", auth, async (req, res) => {
    const post = new Post({
        title: req.body.title,
        publisher: req.body.publisher,
        post: req.body.post,
        date: new Date(),
        owner : req.user._id,
    })
    try {
        await post.save();
        req.user.posts = req.user.posts.concat(post._id)
        await req.user.save();
        res.render("create_post");
        // res.send(post)
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post("/post/dashboard/:id", auth, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect("/post/dashboard");
    } catch (e) {
        res.status(500).send();
    }
}, (error, req, res, next) => {
    res.status(500).send({ error: error.message })
});

router.post("/post/dashboard/update/:id", auth, async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id);
        res.render("update", {
            title: posts.title,
            publisher: posts.publisher,
            post: posts.post,
            id: posts._id,
        });
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            publisher: req.body.publisher,
            post: req.body.post
        })
    } catch (e) {
        res.status(500).send(e);
    }
}, (error, req, res, next) => {
    res.status(500).send({ error: error.message })
})

module.exports = router;