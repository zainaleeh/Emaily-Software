const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI); //connecting with database

const app = express(); // express application 

app.use(bodyParser.json());//MIDDLEWARE FOR POST REQUESTS
//we are initiallizing cookies here, this is a middleware
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
require('./routes/billingRoutes')(app);


const PORT = process.env.PORT || 5001;
app.listen(PORT); 

// Client id: 679608112978-nb3a9iadj5d93mmmtnm7tfmashv03pov.apps.googleusercontent.com

//Client secret: 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