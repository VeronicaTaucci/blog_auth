const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');
const db = require('../models');

//scrape info from header 
// check if user is in db 
// encrypt login password 
// compare encrypted passwords
// place on the session so login can persist


const init = (passport) => {

    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {

        console.log(`check1: scraping info off of header ${email} ${password}`);

        try {

            //looking up the email address, that the user just entered, in our database
            let records = await db.users.findAll({ where: { email: email } })// [{}]

            if (records) {
                //get the db password and compare it to the password that was entered in the form

                let record = records[0];

                bcrypt.compare(password, record.password, (err, match) => {

                    if (match) {
                        console.log('check2: passwords matched');
                        return done(null, record) //serialized
                    }
                    else {
                        console.log(`check3: passwords didn't match`);
                        return done(null, false)
                    }
                })
            }
            else {

                // no user in our database 

                return done(null, false)
            }
        }
        catch (error) {
            console.log(error);
            return done(error)
        }

    }))


    //add the user info to the session 
    // user is the record passed form successful login

    passport.serializeUser((user, done) => {

        console.log(`check4: serializing, adding data to session`);
        done(null, user.id)// second argument is what we want on our session
    })


    // check if user is valid 
    // grab session data form user cookie 
    //decode cookie with secret key 
    //

    passport.deserializeUser(async (id, done) => {

        console.log(`check5: rechecking if id is in db: deserializing`);
        let foundUserInDBFromSessionData = await db.users.findByPk(id);

        if (foundUserInDBFromSessionData) {
            done(null, foundUserInDBFromSessionData)
        }
        else {
            done(null, false)
        }
    })

}

module.exports = init;