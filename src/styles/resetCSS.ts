import { createGlobalStyle } from "styled-components";
import { getFromTheme } from "helpers/getFromTheme";

const resetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${getFromTheme("colors", "background")};
  }

  #root, html, body {
    height: 100vh;
  }
`;

export { resetCSS };
