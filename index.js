const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI); //connecting with database

const app = express(); // express application 

//we are initiallizing cookies here
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000, // this cookie stays alive for 30 days
    keys: [keys.cookieKey]
  })
);

//here we tell passport to make use of cookies
app.use(passport.initialize());
app.use(passport.session());


//we connected the route handlers from authroutes.js file
require('./routes/authroutes')(app);


const PORT = process.env.PORT || 5001;
app.listen(PORT); 

// Client id: 679608112978-nb3a9iadj5d93mmmtnm7tfmashv03pov.apps.googleusercontent.com

//Client secret: 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