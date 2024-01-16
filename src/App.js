import "./App.css";
import Sidebar from "./Components/Sidebar";
import Clock from "./Components/Clock";
import Timer from "./Components/Timer";
import Stopwatch from "./Components/Stopwatch";
import Alarm from "./Components/Alarm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/alarm" element={<Alarm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
