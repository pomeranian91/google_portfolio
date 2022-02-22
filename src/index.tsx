import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
