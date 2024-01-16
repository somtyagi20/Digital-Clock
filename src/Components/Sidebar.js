import { useState } from "react";
import alarm from "../images/alarm.png";
import stopwatch from "../images/stopwatch.png";
import timer from "../images/timer.png";
import home from "../images/home.png";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [text, setText] = useState("Show sidebar");
  return (
    <>
      <div className="sidebar">
        <div className="clock-container">
          <h2>CLOCK</h2>
        </div>
        <div className="home">
          <img src={home} alt="" className="home-img" />
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="timer">
          <img src={timer} alt="" className="timer-img" />
          <NavLink to="/timer">Timer</NavLink>
        </div>
        <div className="stopwatch">
          <img src={stopwatch} alt="" className="stopwatch-img" />
          <NavLink to="/stopwatch">Stopwatch</NavLink>
        </div>
        <div className="alarm">
          <img src={alarm} alt="" className="alarm-img" />
          <NavLink to="/alarm">Alarm</NavLink>
        </div>
      </div>
      <button
        className="sidebar-btn"
        onClick={() => {
          const sidebar = document.querySelector(".sidebar");
          sidebar.style.display === "none"
            ? (sidebar.style.display = "inline-flex")
            : (sidebar.style.display = "none");
          sidebar.style.display === "none"
            ? setText("Show sidebar")
            : setText("Hide sidebar");
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Sidebar;
