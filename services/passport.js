const passport = require('passport'); //import passport library
const GoogleStrategy = require('passport-google-oauth20').Strategy; //importing strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');//importing keys from keys.js

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //route user takes after getting verified by google
}, 
(accessToken, refreshToken, profile, done) => {
  new User({ googleId: profile.id}).save(); //it will take record and save to db
  
})
); //we specify our strategy of auth here