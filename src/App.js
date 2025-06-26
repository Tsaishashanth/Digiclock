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
  // Stopwatch 
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  // Timer 
  const [inputSeconds, setInputSeconds] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounting, timeLeft]);

  const reformatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleStart = () => {
    const num = parseInt(inputSeconds, 10);
    if (!isNaN(num) && num > 0) {
      setTimeLeft(num);
      setIsCounting(true);
    }
  };
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
          <a href="#time-section"><h1 className="containertext">Time</h1></a>
          <a href="#stopwatch-section"><h1 className="containertext">Stopwatch</h1></a>
          <a href="#timer-section"><h1 className="containertext">Timer</h1></a>
        </div>
    </div>
    {/* time section */}
    <div id="time-section" className= "linksbar">
      <h1>Time</h1>
    </div>
    <div className="time-container">
        <h1 className="time-text">{currentTime}</h1>
    </div>
    {/* stopwatch */}
    <div id="stopwatch-section" className= "linksbar">
      <h1>Stopwatch</h1>
    </div>
     <div className="stopwatch-section">
        <h2>{formatTime(seconds)}</h2>
        <div className="stopwatch-buttons">
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button onClick={() => setIsRunning(false)}>Stop</button>
          <button onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
        </div>
      </div>
      {/* timer section */}
      <div id="timer-section" className= "linksbar">
       <h1>Timer</h1>
      </div>
      <div className="timer-section">
        
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          placeholder="Enter seconds"
        />
        <h2>{formatTime(timeLeft)}</h2>
        <div className="timer-buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={() => setIsCounting(false)}>Stop</button>
          <button onClick={() => {
            setIsCounting(false);
            setTimeLeft(0);
            setInputSeconds('');
          }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
