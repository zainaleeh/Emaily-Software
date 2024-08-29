const _ = require('lodash');
const { Path } = require('path-parser');


const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');




module.exports = app => {

  //fetching the surveys for each specific user without fetching the recipients
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });



  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks for Voting</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="background-color: #f8f9fa; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">

    <div class="text-center">
        <h1 class="display-4">Thanks for Voting!</h1>
        <p class="lead">We appreciate your participation.</p>
        <a href="/" class="btn mt-3" style="background-color:#2eca7f">Go Back</a>
    </div>

</body>
</html>`);
  });

  //extracting the valueable information
  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => { //this is the query to update the database
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({});
  });



  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body; //this is what user will pass on as a request when coming to api/surveys

    // new instance of a survey
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),  //insert emails as an object of all recipient email addresses
      _user: req.user.id, //property available to us on mongoose model
      dateSent: Date.now()
    });

    //get place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }

    // try {
    //   await mailer.send(); // Using await here
    //   await survey.save(); //added code
    //   res.send({ success: true });
    // } catch (error) {
    //   console.error('Error sending survey:', error);
    //   res.status(422).send(error);//added code
    // }



  });
};