import { createGlobalStyle, ThemeProvider, withTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

import { AuthProvider } from './../lib/auth';

import { Container } from './../styles/Container';
import Header from '../components/Header';

const theme = {
  background: 'rgb(26, 32, 44) none repeat scroll 0% 0%',
  colors: {
    text: 'rgba(255, 255, 255, 0.92)',
    primary: 'rgb(56, 178, 172)',
  },
};

const GlobalStyle = createGlobalStyle`

  ${normalize}

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.colors.text};
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
