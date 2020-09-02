import React, { useState, useEffect, useCallback } from "react";
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
      mask={[/[0-5]/, /[0-9]/, ":", /[0-5]/, /[0-9]/, ".", /[0-9]/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const Timer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [hasStarted, setHasStarted] = useState(false);

  function handleSetTime(e) {
    let [min, sec] = e.target.value.split(":");
    min = parseInt(min) * 60;

    setSeconds(min + parseInt(sec));
  }

  const handleParseTime = (time) => {
    return (
      handleZeros(Math.floor(time / 60)) + handleZeros((time % 60).toFixed(1))
    );
  };

  const handleZeros = useCallback((value) => {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      setHasStarted(false);
    } else {
      hasStarted &&
        setTimeout(() => {
          setSeconds((seconds - 0.1).toFixed(1));
        }, 100);
    }
  }, [handleZeros, hasStarted, seconds]);

  function toggleHasStarted() {
    setHasStarted(!hasStarted);
  }

  return (
    <div>
      <InputBase
        value={handleParseTime(seconds)}
        onChange={handleSetTime}
        inputComponent={TextMaskCustom}
        readOnly={hasStarted}
      />
      <p>{seconds}</p>

      <Button
        variant="contained"
        color={hasStarted ? "secondary" : "primary"}
        onClick={toggleHasStarted}
      >
        {hasStarted ? "Pause" : "Start"}
      </Button>
    </div>
  );
};

export default Timer;
