const passport = require('passport');

module.exports= app => {


  //google auth handler
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }) 
  );

  //google callback handler
  app.get('/auth/google/callback', passport.authenticate('google'));
};