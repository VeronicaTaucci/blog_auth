
const express = require('express');
const router = express.Router();

router.get('/blog-post', (req,res) => {

   
    res.render('blog-post')
})


module.exports = router;
