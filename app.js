const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
app.use(express.static('public'));
app.use(helmet())
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieSession({
    name: 'session',
    keys: ['dfdsfdsfsd'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use(passport.initialize());
app.use(passport.session());


//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/blog-post.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))
app.use(require('./routes/admin.js'))
app.use(require('./routes/about.js'))
