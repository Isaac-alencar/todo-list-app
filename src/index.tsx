import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { resetCSS as ResetCSS } from "./styles/resetCSS";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
