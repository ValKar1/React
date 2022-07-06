import React, {useState, useEffect, useCallback, useMemo} from "react";

export function FunctionalComponent(props) {

  // Hooks Regeln
  // 1) Hooks fangen immer mit use an, z.B: useContext oder useState
  // 2) Hooks nur auf Top-Level (nicht in Loops, nicht in if's)
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
  // // useEffect 1. (entspricht dem componentDidMount mit dem leerem array)
  // useEffect(() => {
  //   // componentDidMount
  //   const ref = setInterval(() => {
  //     setCountdown((oldCountdownValue) => { // Set value with function
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
  // }, []); // Bei leerem Array entspricht dem componentDidMount. Weil Array leer ist so regiert man nicht auf updates.

  // useEffect 2. (entspricht dem componentDidUpdate)
  // useEffect(() => {
  //   const ref = setTimeout(() => {
  //     if (countdown > 0) {
  //       setCountdown(countdown - 1); // Set direct value
  //     }
  //   }, 1000);
  //
  //   return () => clearTimeout(ref);
  // }, [countdown]); // Reagiert auf jede Änderung von countdown (componentDidUpdate)


  // useEffect 3. (entspricht dem componentDidUpdate)
  // useCallback ist wie useMemo aber für funktionen
  const timeoutFunc = useCallback(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  },[countdown]) // Wird jedes mal neu definiert bei countdown Änderungen
  // Ohne array wird jedes mal neu definiert bei allen Änderungen

  // useMemo funktion ruft function auf (Funktioniert für beliebige Werten z.B markup Beispiel unten, bei Funktionen aber useCallback besser.)
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
