import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import VideoChat from './VideoChat';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Twilio and Flask Video Chat</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛
          </span>{' '}
          by <a href="https://twitter.com/philnash">philnash</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
