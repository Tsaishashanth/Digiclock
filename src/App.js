import logo from './logo.svg';
import './App.css';

function App() {
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
    
    </>
  );
}

export default App;
