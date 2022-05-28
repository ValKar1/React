import React, {useState, useEffect, useCallback, useMemo} from "react";

export function FunctionalComponent(props) {

  // Hooks Regeln
  // 1) Hooks fangen immer mir use an , z.B: useContext oder useState
  // 2) Hooks nur auf Top-Level (nicht in Loops, nicht in ifs)
  // 3) Hooks nur in React Function Components oder anderen Hooks

  // Hooks 1.
  const [counterState, setCounterState] = useState(0);
  const [counterState2, setCounterState2] = useState(0);

  // Hooks 2. in objektform nicht empfehlenswert (werden nicht komprimiert)
  // const [totalState, setTotalState] = useState({
  //   counterState: 0,
  //   counterState2: 0
  // });

  const [countdown, setCountdown] = useState(10);
  // // useEffect 1. (entspricht dem componentDIdMount mit dem leerem array)
  // useEffect(() => {
  //   // componentDIdMount
  //   const ref = setInterval(() => {
  //     setCountdown((oldCountdownValue) => {
  //       if (oldCountdownValue > 0) {
  //         return oldCountdownValue - 1;
  //       }
  //       return 0;
  //     });
  //   }, 1000);
  //
  //   // componentWillUnmount
  //   return () => {
  //     window.clearInterval(ref)
  //   };
  // }, []);

  // useEffect 2. (entspricht dem componentDidUpdate)
  // useEffect(() => {
  //   const ref = setTimeout(() => {
  //     if (countdown > 0) {
  //       setCountdown(countdown - 1);
  //     }
  //   }, 1000);
  //
  //   return () => clearTimeout(ref);
  // }, [countdown]); // Reagiert auf jede Änderung von countdown


  // useEffect 3. (entspricht dem componentDidUpdate)
  // useCallback ist wie useMemo aber für funktionen
  const timeoutFunc = useCallback(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  },[countdown])

  // useMemo funktion ruft function auf
  // const timeoutFunc = useMemo(() => () => {
  //   if (countdown > 0) {
  //     setCountdown(countdown - 1);
  //   }
  // },[countdown])


  useEffect(() => {
    const ref = setTimeout(timeoutFunc, 1000);
    return () => clearTimeout(ref);
  }, [countdown]); // Alternativ: [timeoutFunc]

  return <div>
          <div>{props.number} FunctionalComponent will be compressed by uglify. </div>
          <div>
            <button type="button" onClick={() =>{
              setCounterState(counterState +1);
              setCounterState2(counterState2 +2);
            }}>Click me</button>
            <p>CounterValue = {counterState}, CounterValue2 = {counterState2}</p>
          </div>
          <div>
            <div>Countdown: {countdown}</div>
            <progress value={countdown} min="0" max="10" />
          </div>
         </div>;

  // // useMemo 1. (entspricht dem componentShouldUpdate)
  // const markup = useMemo(() => {
  //   return (
  //     <div>
  //       <div>Countdown: {countdown}</div>
  //       <progress value={countdown} min="0" max="10" />
  //     </div>
  //   )
  // }, [countdown]); // componentShouldUpdate
  //
  // return markup;
}
