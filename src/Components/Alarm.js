import { useState } from "react";

function Alarm() {
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
    <div className="time-container">
      <div className="time">
        <div className="time-circle">
          <h1 className="time-heading">Alarm</h1>
          <h1 className="running-time">
            {hour}:{minute}:{second}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Alarm;
