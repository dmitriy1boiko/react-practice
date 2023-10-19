import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Counter } from "../src/pages/Counter";
import { Calculator } from "../src/pages/Calculator";
import { Timer } from "../src/pages/Timer";
import "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/timer">Timer</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
