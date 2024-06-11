const passport = require('passport'); //import passport library
const GoogleStrategy = require('passport-google-oauth20').Strategy; //importing strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');//importing keys from keys.js

const User = mongoose.model('users');

//making a function to insert a token in the cookie to identify the already signed up user
//we turned a mongoose user model instance to an id
//in these two functions, we turn a user model to a cookie and then a cookie to a user model 

passport.serializeUser((user,done) => {
  done(null, user.id);

});

//we turned an id to a user model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
      done(null, user);
    })


});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //route user takes after getting verified by google
}, 
(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }).then((existingUser) => {//query
      if (existingUser){
        //we already have a record with the given profile
        done(null, existingUser,);
      } 
      else {
        //we don't have a user record with this ID, make a new record
        new User({ googleId: profile.id}).save()
          .then(user => done(null,user));
      }
      
    });
  
  
})
); //we specify our strategy of auth here