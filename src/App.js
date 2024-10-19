import './App.css';
import React, { useState } from "react";

function App() {
  const [length, setLength] = useState("");  // State to store password length
  const [password, setPassword] = useState("");  // State to store the generated password

  // Function to generate the random password
  const generatePassword = () => {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}[]/.";
    let pass = "";
    for (let i = 0; i < Number(length); i++) {
      const index = Math.floor(Math.random() * chars.length);
      pass += chars[index];
    }
    return pass;
  };

  // Handler for the 'Generate' button click
  const handleGenerateClick = (e) => {
    e.preventDefault();
    if (length > 0) {  // Ensure a valid length is entered
      setPassword(generatePassword());
    }
  };

  // Handler for the 'Clear' button click
  const handleClearClick = () => {
    setLength("");  // Clear length input
    setPassword("");  // Clear generated password
  };

  return (
    <div className="container">
      <div className="card">
        <p className="title">Random Password Generator</p>
        <div className="input-container">
          {/* Input for password length */}
          <input
            type="number"
            className="input-length"
            placeholder="Enter Length"
            value={length}  // Bind value to state
            onChange={(e) => setLength(e.target.value)}  // Update state on change
          />
          
          {/* Button to generate password */}
          <button
            className="generate-btn"
            onClick={handleGenerateClick}  // Handle click event
          >
            Generate
          </button>

          {/* Input for displaying the generated password */}
          <input
            type="text"
            className="input-password"
            placeholder="Generated Password"
            value={password}  // Bind value to state
            readOnly  // Make it read-only
          />

          {/* Button to clear inputs */}
          <button
            className="clear-btn"
            onClick={handleClearClick}  // Handle click event
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
