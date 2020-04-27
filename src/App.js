import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <h1>Flask and Twilio Video Conference</h1>
      <form>
        <label>
          Name:
          <input type="text" name="username" />
        </label>
        <input type="submit" value="Submit" />
        </form>

      <p name="count"></p>
      <p>The current time is {currentTime}.</p>
    </div>
  );
}

export default App;
