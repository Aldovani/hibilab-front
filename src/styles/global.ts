import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }

  html{
    background: #16161A;
    -webkit-font-smoothing: antialiased;
  }
body{
 min-height:100vh   ;
}

  @media (max-width:1080px){
  html{
    font-size: 93.75%;
  }
}
@media(max-width:720px){
  html{
    font-size: 87.5%;
  }
}



`