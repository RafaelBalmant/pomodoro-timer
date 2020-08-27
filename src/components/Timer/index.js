import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import subSeconds from "date-fns/subSeconds";
import getSeconds from "date-fns/getSeconds";
import getMinutes from "date-fns/getMinutes";

import "./styles.css";

const Timer = () => {
  const [counter, setCounter] = useState(new Date(2020, 0, 0, 0, 0, 5));
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    hasStarted &&
      (getMinutes(counter) > 0 || getSeconds(counter) > 0) &&
      setTimeout(() => setCounter(subSeconds(counter, 1)), 1000);
  }, [counter, hasStarted]);

  function toggleHasStarted() {
    setHasStarted(!hasStarted);
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          ampm={false}
          openTo="minutes"
          views={["minutes", "seconds"]}
          format="mm:ss"
          value={counter}
          onChange={(e) => setCounter(e)}
        />
      </MuiPickersUtilsProvider>
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
