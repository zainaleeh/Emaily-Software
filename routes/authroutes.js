const passport = require('passport');

module.exports= app => {


  //google auth handler
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }) 
  );

  //google callback handler
  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
    );

  app.get('/api/logout', (req, res) => {
    req.logout();//kills the id with the specific cookie hence logs out
    res.redirect('/') //redirects the user to main page

  });
  // handler to handle cookie requests, give back the user id for the person who is already logged in
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

