import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Container from './../styles/Container';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
