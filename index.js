const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI); //connecting with database
const app = express(); // express application 

//we connected the route handlers from authroutes.js file
require('./routes/authroutes')(app);


const PORT = process.env.PORT || 5001;
app.listen(PORT); 

// Client id: 679608112978-nb3a9iadj5d93mmmtnm7tfmashv03pov.apps.googleusercontent.com

//Client secret: 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