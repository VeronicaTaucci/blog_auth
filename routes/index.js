const express = require('express');
const router = express.Router();
const db = require('../models/');  //looks for index file by default- 


// let blogs = db.body;
// //GET blogs to display
router.get('/', async (req, res) => {
            let body = [];
            blogs.forEach(blogObj => { //from data extract body
                body = body.concat(blogObj.body)
                console.log(body)
            })
            console.log(body)
            res.render('index', {//pass it over ejs
                body: body
            })
        })
// router.get('/', (req, res) => {


//     res.render('index')
// })
router.get('/logout', (req, res) => {
    req.logout() // this function is added by passport and clears the session 

    res.redirect('/login')
})

module.exports = router;