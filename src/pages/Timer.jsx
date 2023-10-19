import { useState, useEffect } from "react";
import css from "./Timer.module.css";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
 const [id, setId] =useState();

  useEffect(() => {
   let timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      
    }, 1000);
    setId(timer);
    return () => clearInterval(timer);
  },[seconds, minutes]);

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(id);
  };
  return (
    <div className={css.timer}>
      <div className={css.container}>
        <div className={css.timer_container}>
          <h1>Timer</h1>
          <p>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
          <button className={css.button} onClick={restart}>
            Restart
          </button>
          <button className={css.button} onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
