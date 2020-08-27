import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

//import "./styles.css";

const Timer = () => {
  const [counter, setCounter] = useState(60);
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    hasStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, hasStarted]);

  function toggleHasStarted() {
    setHasStarted(!hasStarted);
  }

  return (
    <>
      <input value={counter}></input>
      <Typography variant="h6" gutterBottom>
        Countdown: {counter}
      </Typography>
      <div></div>
      <button onClick={toggleHasStarted}>
        {hasStarted ? "Pause" : "Start"}
      </button>
    </>
  );
};

export default Timer;
