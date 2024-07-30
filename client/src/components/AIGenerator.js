import React, { useState } from 'react';
import axios from 'axios';

const AIGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/api/ai/generate', { prompt });
      setResponse(res.data.message); // Make sure this matches the JSON key sent from the backend
    } catch (err) {
      console.error('Error fetching AI response:', err);
      setResponse('Failed to generate content.');
    }
  };
  

  return (
    <div>
      <h2>AI Survey Template Generator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your prompt:
          <input type="text" value={prompt} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate</button>
      </form>
      <div>
        <h3>Generated Content:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default AIGenerator;
