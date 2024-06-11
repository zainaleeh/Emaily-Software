const passport = require('passport');

module.exports= app => {


  //google auth handler
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }) 
  );

  //google callback handler
  app.get('/auth/google/callback', passport.authenticate('google'));

  // handler to handle cookie requests, give back the user id for the person who is already logged in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

