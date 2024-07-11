//we're making the schema for the recipient sub collections

const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false},


});

module.exports = recipientSchema;