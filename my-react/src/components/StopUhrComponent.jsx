import React, {useState, useEffect, useCallback, useMemo} from "react";

export function StopUhrComponent(props) {

  const [timeState, setTimeState] = useState(0);
  const [pauseState, setPauseState] = useState(false);

  useEffect(() => {
    if (timeState > 0 && pauseState === false) {
      const ref = setTimeout(() => {
          if (pauseState === false) {
            setTimeState(timeState + 1);
          }
      }, 10);
      return () => clearTimeout(ref);
    }
    return () => {};
  }, [timeState]);

  const formatTime = (micros) => {
    let hundreds = Math.floor(micros % 60);
    let seconds = Math.floor((micros / 100) % 60);
    let minutes = Math.floor((micros / (60 * 100)) % 60);
    let hours = Math.floor((micros / (60 * 60 * 100)) % 60);

    if (hundreds < 10) {
      hundreds = '0'+hundreds
    }
    if (seconds < 10) {
      seconds = '0'+seconds
    }
    if (minutes < 10) {
      minutes = '0'+minutes
    }
    if (hours < 10) {
      hours = '0'+hours
    }
    return `${hours}:${minutes}:${seconds} '${hundreds}`;
  }

  const start = () => {
    setPauseState(false)
    setTimeState(1);
  }
  const stop = () => {
    setPauseState(false)
    setTimeState(0)
  }
  const pause = () => {
    if (pauseState) {
      setPauseState(false)
      if (timeState > 0) {
        setTimeState(timeState + 1)
      }
    } else {
      setPauseState(true)
    }
  }

  return <div>
    <h3>Meine Stoppuhr</h3>
    <div>{ formatTime(timeState) }</div>
    <button onClick={ start }>Start</button>
    <button onClick={ pause }>Pause</button>
    <button onClick={ stop }>Stop</button>
  </div>
}
