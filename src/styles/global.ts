import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 14px;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: rgb(243, 243, 243);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;
