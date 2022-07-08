import React, {useCallback, useEffect, useMemo, useState} from "react";

export function PositionDesMauszeigers2() {
  const [showXy, setShowXy] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mousemove = useCallback((mouseEvent) => {
    setX(mouseEvent.clientX)
    setY(mouseEvent.clientY)
  },[])

  const keyup = useCallback((keyEvent) => {
    if (keyEvent.keyCode === 'Escape') {
      setX(0);
      setY(0);
      setShowXy(false);
      window.removeEventListener("mousemove", mousemove)
      window.removeEventListener("keyup", keyup)
    }
  },[])

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", mousemove)
      window.removeEventListener("keyup", keyup)
    };
  }, [mousemove]) // Delete listeners on unmount

  const xyView = useMemo(() => {
    if (showXy) {
      return (
        <p>
          <strong>X={x}</strong>
          <strong>Y={y}</strong>
        </p>
      );
    }

    return "";
  }, [showXy, x, y]);

  const buttonClicked = () => {
    setShowXy(!showXy);
    window.removeEventListener("mousemove", mousemove)
    window.removeEventListener("keyup", keyup)

    if (!showXy) {
      window.addEventListener("mousemove", mousemove)
      window.addEventListener("keyup", keyup)
    }
  }

  return (
    <div>
      <h1>XY-Viewer</h1>
      <button type="button" onClick={buttonClicked}>On/Off</button>
      {xyView}
    </div>
  );
}
