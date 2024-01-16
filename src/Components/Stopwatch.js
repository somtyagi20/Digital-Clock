import "./stopwatch.css";
import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  let [timer, setTimer] = useState(false);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  const intervalId = useRef(0);

  // function stopwatch() {
  //   setTimer(true);
  //   setInterval(() => {
  //     if (timer) {
  //       setSecond(second + 1);
  //       if (second === 60) {
  //         setMinute(minute + 1);
  //         setSecond(0);
  //       }
  //       if (minute === 60) {
  //         setHour(hour + 1);
  //         setMinute(0);
  //         setSecond(0);
  //       }
  //     } else {
  //       return;
  //     }
  //   }, 1000);
  // }

  useEffect(() => {
    if (timer) {
      intervalId.current = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return prevMinute + 1;
            });
            return 0;
          }
          return prevSecond + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
    // return () => clearInterval(intervalId.current);
  }, [timer]);

  function reset() {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setTimer(false);
  }

  function stop() {
    setTimer(false);
  }

  function start() {
    setTimer(true);
  }

  return (
    <div className="time-container">
      <div className="time">
        <div className="time-circle">
          <h1 className="time-heading">Stopwatch</h1>
          <h1 className="running-time">
            {hour}:{minute}:{second}
          </h1>
        </div>
        <div className="time-buttons">
          <button className="time-button" onClick={start}>
            Start
          </button>
          <button className="time-button" onClick={stop}>
            Stop
          </button>
          <button className="time-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
