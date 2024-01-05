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
  const [wish, setWish] = useState("Good Morning");
  setInterval(() => {
    const time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
    setSecond(time.getSeconds());
    if (time.getHours() > 4 && time.getHours() < 12) {
      setWish("Good Afternoon");
    } else if (time.getHours() > 12 && time.getHours() < 19) {
      setWish("Good Evening");
    } else {
      setWish("Good Night");
    }
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
          <p>{wish}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
