import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
