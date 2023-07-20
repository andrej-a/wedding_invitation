import { createGlobalStyle } from 'styled-components';

import './assets/fonts/efnwenecja.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Preview';
  src: local('Preview'), 
    url("../src/assets/fonts/harmony-Regular.woff") format('woff');
  font-weight: 700;
}

@font-face {
  font-family: 'Romanus';
  src: local('Romanus'), 
    url("../src/assets/fonts/ARomanus.woff") format('woff');
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
  }

`;
export default GlobalStyle;
