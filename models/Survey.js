//we're making the schema for the survey creation

const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema], //we nested two schemas together
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  dataSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);