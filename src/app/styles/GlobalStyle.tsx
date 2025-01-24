'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    list-style: none;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    display: grid;
    place-self: center;
    width: 100vw;
    height: 100vh;
    background: yellow;
  }

  input {
    font: inherit;
  }

  p:hover, h1, h2 {
    cursor: default;
  }

  button > *:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
