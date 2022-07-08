import React, {useEffect, useMemo, useState} from "react";

export function PositionDesMauszeigers() {
  const [showXy, setShowXy] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const onEscape = (event) => {
      if (event.keyCode == 27) {
        setShowXy(false);
        setX(0);
        setY(0);
      }
    }

    const mousemove = (event) => {
      setX(event.clientX)
      setY(event.clientY)
    };

    window.addEventListener('keydown', onEscape);
    window.addEventListener("mousemove", mousemove)

    return () => {
      window.addEventListener('keydown', onEscape)
      window.removeEventListener("mousemove", mousemove)
    };
  }, [])

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

  const onOffToggle = () => {
    setShowXy(!showXy);
  }

  return (
    <div>
      <h1>XY-Viewer</h1>
      <button type="button" onClick={onOffToggle}>On/Off</button>
      {xyView}
    </div>
  );
}
