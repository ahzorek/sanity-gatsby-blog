import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: rgb(52,85,219);
    color: black;
  }

  html {
    font-family: BWHaasGrotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.mainBg};
    color: ${props => props.theme.primaryText};
    margin: 0;
    min-height: calc(100% - 73px - 120px);
    @media (min-width: 450px) {
      min-height: calc(100% - 91px - 155px);
    }
  }

  * {
    box-sizing: border-box;
  }
`
export default GlobalStyle