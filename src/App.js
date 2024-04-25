import React, { useState } from 'react';
import './App.css';
import * as CryptoJS from 'crypto-js';

function App() {
  const [text, setText] = useState('');
  const [hash, setHash] = useState('');
  const [matchResult, setMatchResult] = useState('');

  const predefinedHash = '3ee890fd9e88e49571115d5e4f7cefb62131bc9c28dcea38d01d29f6cf58b964'; 

  const calculateHash = () => {
    const calculatedHash = CryptoJS.SHA256(text).toString();
    setHash(calculatedHash);

    if (calculatedHash === predefinedHash) {
      setMatchResult('Yes');
    } else {
      setMatchResult('No');
    }
  };

  return (
    <div className="App">
      <h1>Hash Matching App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={calculateHash}>Calculate Hash</button>
      <p>Calculated Hash: {hash}</p>
      <p>Matches Predefined Hash: {matchResult}</p>
    </div>
  );
}

export default App;