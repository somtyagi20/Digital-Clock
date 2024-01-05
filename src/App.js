import "./App.css";
import alarm from "./images/alarm.png";
import stopwatch from "./images/stopwatch.png";
import timer from "./images/timer.png";
import { useState } from "react";

function App() {
  const time = new Date();
  const [hour, setHour] = useState(time.getHours());
  const [minute, setMinute] = useState(time.getMinutes());
  const [second, setSecond] = useState(time.getSeconds());

  setInterval(() => {
    const time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
    setSecond(time.getSeconds());
  }, 1000);
  return (
    <div className="App">
      <div className="sidebar">
        <div className="clock-container">
          <h2>CLOCK</h2>
        </div>
        <div className="timer">
          <img src={timer} alt="" className="timer-img" />
          <a href="rw">Timer</a>
        </div>
        <div className="stopwatch">
          <img src={stopwatch} alt="" className="stopwatch-img" />
          <a href="re">Stopwatch</a>
        </div>
        <div className="alarm">
          <img src={alarm} alt="" className="alarm-img" />
          <a href="rs">Alarm</a>
        </div>
      </div>

      <div className="time-container">
        <div className="time">
          <div className="time-circle">
            <h1 className="time-heading">Time</h1>
            <h1 className="running-time">
              {hour}:{minute}:{second}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
