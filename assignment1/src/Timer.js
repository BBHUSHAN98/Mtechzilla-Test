
import React, { useState, useEffect,useRef } from "react";

const STATUS = {
  pause: 0,
  start: 1,
  default: 2
}
const Timer = () => {
const [minutes, setMinutes] = useState(25);
const [seconds, setSeconds] = useState(0);
const [displayMessage, setDisplayMessage] = useState(false);
const [status, setStatus] = useState(STATUS.default);
const intervalRef = useRef();

function countDown(){
  if (seconds === 0) {
      if (minutes !== 0) {
        setSeconds(59);
        setMinutes(min => min - 1); 
      } else {
        let mins = displayMessage ? 25 : 4;
        let sec = 59;
        setSeconds(sec);
        setMinutes(mins); 
        setDisplayMessage(value => !value);
      }
    } else {
      setSeconds(sec => sec - 1);
    }
}

useEffect(() => {
  if(status === STATUS.start){
    intervalRef.current = setInterval(() => {
      countDown()
    }, 1000);
  } else if(status === STATUS.pause && intervalRef.current){
    clearInterval(intervalRef.current)
  }
  return () => {
    clearInterval(intervalRef.current)
  };
}, [minutes, seconds, status]);

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

const start = () => setStatus(STATUS.start);
const pause = () => setStatus(STATUS.pause);
const Reset = () => {
  setStatus(STATUS.pause);
  setMinutes(25);
  setSeconds(0);
}

return (
<>

    <div className="pomodoro flex justify-center font-bold mt-96 px-20">
      <div className="message">
        {displayMessage && <div className="text-5xl font-bold">Break Time</div>}
      </div>
      <h1 className="timer text-9xl">
        {timerMinutes}:{timerSeconds}
      </h1>
    </div>
    <div className="flex justify-center mt-6">
    <button
      className="px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold" onClick={start}>Start
    </button>
    <button
      className="px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold" onClick={pause}>Pause
    </button>
    <button
      className="px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold"onClick={Reset}>Reset
    </button>
    </div>

  </>
);
}

export default Timer