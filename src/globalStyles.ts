import { createGlobalStyle } from 'styled-components';
import './assets/fonts/efnwenecja.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'PrimaryFont';
  src: local('PrimaryFont'), 
    url("../assets/fonts/efnwenecja.ttf") format('ttf');
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
