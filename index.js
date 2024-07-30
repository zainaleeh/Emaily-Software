const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const aiRoutes = require('./routes/aiRoutes');  // Import AI routes

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
require('./routes/surveyRoutes')(app);
app.use('/api/ai', aiRoutes); // Use AI routes

if (process.env.NODE_ENV === 'production'){
  //Express will serve up production assets
  //like our main.js file, or main.css file

  app.use(express.static('client/build'));

  //express will serve up the index.html file
  //if it does't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5001;
app.listen(PORT);
