import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import "./styles.css";

const Timer = () => {
  const [counter, setCounter] = useState(4);
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    if (counter <= 0) {
      setHasStarted(false);
    } else {
      hasStarted &&
        counter > 0 &&
        setTimeout(() => {
          setCounter((counter - 0.01).toFixed(2));
        }, 10);
      if (counter === 0) {
        setHasStarted(!hasStarted);
      }
    }
  }, [counter, hasStarted]);

  function toggleHasStarted() {
    setHasStarted(!hasStarted);
  }

  return (
    <>
      <input
        value={Math.ceil(counter)}
        onChange={(e) => setCounter(e.target.value)}
      ></input>

      <Button
        variant="contained"
        color={hasStarted ? "secondary" : "primary"}
        onClick={toggleHasStarted}
      >
        {hasStarted ? "Pause" : "Start"}
      </Button>
    </>
  );
};

export default Timer;
