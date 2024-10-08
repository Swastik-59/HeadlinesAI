import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import ContentType from './components/ContentType';
import PlatformType from './Components/PlatformType';
import ContentLength from './Components/ContentLength';
import Markdown from 'marked-react';

function App() {
  const [platform, setPlatform] = useState("YouTube");
  const [contentType, setContentType] = useState("Video Ideas");
  const [prompt, setPrompt] = useState("");
  const [length, setLength] = useState(50);

  const [response, setResponse] = useState("");
  const [fetching, setFetching] = useState(false);

  function handleSubmit() {
    try {
      setFetching(true)
      axios
        .post("https://headlines-ai-api.vercel.app/ai", { platform, contentType, prompt, length })
        .then((res) => {
          setResponse(res.data);
          setFetching(false);
        })
    } catch {
      console.error("Error fetching AI response:", error);
      setResponse("Error fetching response.");
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Platform and Content Type</h3>
        <PlatformType platform={platform} setPlatform={setPlatform} />
        <ContentType contentType={contentType} setContentType={setContentType} />
        <ContentLength length={length} setLength={setLength} />
      </div>

      <div className="main-content">
        <h1>Headlines AI</h1>
        <label htmlFor="prompt">Describe your idea:</label>
        <input
          id="prompt"
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={() => handleSubmit()}
          disabled={fetching}
          className={fetching ? "button-disabled" : "btn"}
        >
          {fetching ? "Fetching..." : "Magic!"}
        </button>
        <div className="response-container">
          <h3>Response:</h3>
          <div className="response-text">
            <Markdown>
              {response ? response : "No response yet"}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
