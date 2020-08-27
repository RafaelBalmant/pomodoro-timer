import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Timer from "./components/Timer";

import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Pomodoro Clock
        </Typography>
        <Timer />
      </Box>
    </Container>
  );
}

export default App;
