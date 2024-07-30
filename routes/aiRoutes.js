const express = require('express');
const router = express.Router();
const openai = require('../services/openaiService');

router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      max_tokens: 150
    });

    res.json({ message: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).send('Failed to generate text from OpenAI');
  }
});

module.exports = router;
