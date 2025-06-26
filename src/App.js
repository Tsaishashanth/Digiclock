import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <div className ="bar">
      <h1 className ="barname">Digiclock</h1>
    </div>
    <div className= "about">
        <img src="/digiclockimage.png" className="aboutimage" />
        <div className= "adjust">
          <h1 className="abouttext">Digiclock</h1>
          <p>DigiClock is a simple and modern website that shows the current time, a stopwatch, and a timer. It helps users keep track of time easily</p>
        </div>
        <div className= "container">
          <h1 className= "containertext">Time</h1>
          <h1 className= "containertext">stopwatch</h1>
          <h1 className= "containertext">Timer</h1>
        </div>
    </div>
    {/* time section */}
    <div className= "linksbar">
      <h1>Time</h1>
    </div>
    <div className="time-container">
        <h1 className="time-text">{currentTime}</h1>
      </div>
    </>
  );
}

export default App;
