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
      setResponse(res.data.message);
    } catch (err) {
      console.error('Error fetching AI response:', err);
      setResponse('Failed to generate content.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <h2 style={{ color: '#333' }}>AI Survey Template Generator</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ marginBottom: '5px', color: '#555', fontWeight: 'bold' }}>
          Enter your prompt:
          <input type="text" value={prompt} onChange={handleInputChange} style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }} />
        </label>
        <button type="submit" style={{ background: '#007BFF', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Generate
        </button>
      </form>
      <div>
        <h3 style={{ marginTop: '20px', color: '#333' }}>Generated Content:</h3>
        <p style={{ background: '#f8f8f8', padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}>{response}</p>
      </div>
    </div>
  );
};

export default AIGenerator;
