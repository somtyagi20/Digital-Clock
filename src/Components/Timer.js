import "./timer.css";
import { useState, useEffect, useRef } from "react";

export default function Timer() {
  let [view, setView] = useState(false);
  let [hour, setHour] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  const intervalId = useRef(0);
  // let [timer, setTimer] = useState(false);
  function edit() {
    setView(true);
  }

  function stop() {
    clearInterval(intervalId.current);
  }
  function start() {
    intervalId.current = setInterval(() => {
      // setSeconds((prevSecond) => {
      //   if (prevSecond === 0) {
      //     setMinutes((prevMinute) => {
      //       if (prevMinute === 0) {
      //         setHour((prevHour) => prevHour - 1);
      //         return 0;
      //       }
      //       return prevMinute - 1;
      //     });
      //     return 0;
      //   }
      //   return prevSecond - 1;
      // });
      if (seconds === 0 && minutes === 0 && hour === 0) {
        clearInterval(intervalId.current);
        return;
      } else {
        //   setSeconds(seconds - 1);
        //   if (seconds === 0) {
        //     setMinutes(minutes - 1);
        //     setSeconds(59);
        //   }
        //   if (minutes === 0) {
        //     setHour(hour - 1);
        //     setMinutes(59);
        //     setSeconds(59);
        //   }
        setSeconds((prevSecond) => {
          if (prevSecond === 0) {
            setMinutes((prevMinute) => {
              if (prevMinute === 0) {
                setHour((prevHour) => prevHour - 1);
                return 59;
              }
              return prevMinute - 1;
            });
            return 59;
          }
          return prevSecond - 1;
        });
      }
    }, 1000);
  }

  return (
    <div className="time-container">
      <div className="time">
        <div className="time-circle">
          <h1 className="time-heading">Timer</h1>
          <h1 className="running-time">
            {hour}:{minutes}:{seconds}
          </h1>
        </div>
        <div className="time-buttons">
          <button className="time-button" onClick={start}>
            Start
          </button>
          <button className="time-button" onClick={stop}>
            Stop
          </button>
          <button className="time-button" onClick={edit}>
            Edit
          </button>
        </div>
      </div>
      {view && (
        <SetTime
          setView={setView}
          setHour={setHour}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      )}
    </div>
  );
}

function SetTime({ setView, setHour, setMinutes, setSeconds }) {
  function setTime() {
    setView(false);
  }

  return (
    <div className="set-time-container">
      <div className="set-time">
        <div className="set-time-heading">
          <h1>Set Time</h1>
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
