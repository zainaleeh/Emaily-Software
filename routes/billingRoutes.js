const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


//charges the user
//requireLogin checks if the user is logged in
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 500, 
      currency: 'usd',
      description: '$5 fir 5 credits',
      source: req.body.id

    });

    req.user.credits += 5; //updates the # of credits
    const user = await req.user.save();

    res.send(user); //sends user model back


  });

};