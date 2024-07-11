//you dont really need to understand all this because this is just mailgrid login 
// we basically add properties to the mailer, convert it to json, and send it to sendgrid

const sendgrid = require('sendgrid');

const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({subject, recipients}, content){
    super();

    this.sgApi = sendgrid(keys.sendGridKey); //this is how we communicate with sendgrid
    this.from_email = new helper.Email('zainaleeh@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients){
    return recipients.map(({email}) => {
      return new helper.Email(email);
    });
  } 

  // this function is just how sendGrid works to track the links in the email
  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const ClickTracking = new helper.ClickTracking(true,true);

    trackingSettings.setClickTracking(ClickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients(){
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  //this is where we convert to JSON and send to sendgrid
  async send(){
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
  catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }

}

module.exports = Mailer;