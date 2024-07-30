// services/openaiService.js
const { OpenAI } = require('openai');

const keys = require('../config/keys');

const openai = new OpenAI({
    apiKey: keys.openAIKey,
});

module.exports = openai;
