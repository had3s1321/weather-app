'use client';

import { createGlobalStyle } from 'styled-components';
import { spacing } from '@/app/styles/variables';

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-light: '#FFFFFF';
    --clr-dark: '#000000';
    --clr-bg: '#F5F5F5';

    --gap-m: ${spacing.medium};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    list-style: none;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center; 
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    background: var(--clr-bg);
  }

  input {
    font: inherit;
  }

  p:hover, h1:hover, h2:hover {
    cursor: default;
  }

  button > *:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
