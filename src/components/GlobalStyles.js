import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    div.container {
      width: 90%;
      margin: auto;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  }
`;

export default GlobalStyles;
