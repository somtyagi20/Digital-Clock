import { useState } from "react";
import music from "../images/ringtone-126505.mp3";

function Alarm() {
  let [view, setView] = useState(false);
  let [hour, setHour] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let audio;
  setInterval(() => {
    const time = new Date();
    const currentHour = time.getHours();
    const currentMinutes = time.getMinutes();
    const currentSeconds = time.getSeconds();
    if (
      currentHour === hour &&
      currentMinutes === minutes &&
      currentSeconds === seconds
    ) {
      audio = new Audio(music);
      audio.play();
    }
  }, 1000);

  function edit() {
    setView(true);
  }

  return (
    <div className="time-container">
      <div className="time">
        <div className="time-circle">
          <h1 className="time-heading">Alarm</h1>
          <h1 className="running-time">
            {hour}:{minutes}:{seconds}
          </h1>
        </div>
        <div className="time-buttons">
          <button className="time-button" onClick={edit}>
            Set Alarm
          </button>
        </div>
      </div>
      {view && (
        <SetAlarm
          setView={setView}
          setHour={setHour}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      )}
    </div>
  );
}

export default Alarm;

function SetAlarm({ setView, setHour, setMinutes, setSeconds }) {
  function setTime() {
    setView(false);
  }

  return (
    <div className="set-time-container">
      <div className="set-time">
        <div className="set-time-heading">
          <h1>Set Alarm</h1>
        </div>
        <div className="set-time-inputs">
          <input
            type="number"
            placeholder="Hours"
            onChange={(e) => setHour(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Minutes"
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Seconds"
            onChange={(e) => setSeconds(Number(e.target.value))}
          />
        </div>
        <div className="set-time-buttons">
          <button className="set-time-button" onClick={setTime}>
            Set
          </button>
        </div>
      </div>
    </div>
  );
}
