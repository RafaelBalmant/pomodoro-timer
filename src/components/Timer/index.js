import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import MaskedInput from "react-text-mask";

import "./styles.css";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-5]/, /[0-9]/, ":", /[0-5]/, /[0-9]/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const Timer = () => {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("04");
  const [hasStarted, setHasStarted] = useState(false);

  function handleTime(e) {
    //console.log(e);
    const [min, sec] = e.target.value.split(":");
    //console.log(min, sec);
    setMinutes(min);
    setSeconds(sec);
  }

  useEffect(() => {
    if (minutes === "00" && seconds === "00") {
      setHasStarted(false);
    } else {
      hasStarted &&
        setTimeout(() => {
          if (seconds > 0 && seconds < 10) {
            setSeconds("0" + (parseInt(seconds) - 1).toString());
          } else if (seconds > 0) {
            setSeconds((parseInt(seconds) - 1).toString());
          } else if (minutes > 0 && minutes < 10) {
            setSeconds("59");
            setMinutes("0" + (parseInt(minutes) - 1).toString());
          } else {
            setSeconds("59");
            setMinutes((parseInt(minutes) - 1).toString());
          }
        }, 1000);
    }
  }, [hasStarted, minutes, seconds]);

  function toggleHasStarted() {
    setHasStarted(!hasStarted);
  }

  return (
    <>
      <InputBase
        value={minutes + seconds}
        onChange={handleTime}
        inputComponent={TextMaskCustom}
      />

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
