import { useState } from "react";
import "./clock.css";

function Clock() {
  const time = new Date();
  const [hour, setHour] = useState(time.getHours());
  const [minute, setMinute] = useState(time.getMinutes());
  const [second, setSecond] = useState(time.getSeconds());
  const [wish, setWish] = useState("");

  setInterval(() => {
    const time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
    setSecond(time.getSeconds());
    let hour = time.getHours();
    if (hour > 4 && hour < 12) {
      setWish("Good Morning");
    } else if (hour > 12 && hour < 17) {
      setWish("Good Afternoon");
    } else if (hour > 17 && hour < 19) {
      setWish("Good Evening");
    } else {
      setWish("Good Night");
    }
  }, 1000);
  return (
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
  );
}

export default Clock;
