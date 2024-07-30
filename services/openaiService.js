// services/openaiService.js
const { Configuration, OpenAIApi } = require('openai');

const keys = require('../config/keys');

const configuration = new Configuration({
  apiKey: keys.openAIKey,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;
