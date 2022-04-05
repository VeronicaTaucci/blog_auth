
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const db = require('../models');

router.get('/registration', (req,res) => {

   
    res.render('registration')
})
router.post('/registration', async (req, res) => {
    //collect data and store it in our db
    try {
        //scraping info from header
        let { firstName, lastName, email, password } = req.body;

        //password encrypt
        password = bcrypt.hashSync(password, 8);

        //asume that all users are basic levels
        //chech database to see if email already exists:
        let emailCheck = await db.users.findAll({ where: { email: email } })
        if (emailCheck.length > 0) {
            res.render('registration', {
                error: ' email already exists, please log in or use another email'
            })
        } else {
            let insertRecord = await db.users.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                userID: 2
            })
            res.redirect('/login')
        }
    }
    catch (err) {
        console.log(err)
        res.redirect('/registration',{
            error: 'error: can not match'
            })
    }
    })
module.exports = router;
