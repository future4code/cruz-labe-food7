import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
