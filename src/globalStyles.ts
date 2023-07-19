import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url();

@font-face {
  font-family: 'NK263';
  src: local('NK263'), 
    url("./fonts/nk263_medium.otf") format('otf');
  font-weight: 700;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all .3s ease;
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    font-family: 'NK263'
  }

`;
export default GlobalStyle;
