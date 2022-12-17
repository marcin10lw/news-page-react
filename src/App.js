import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container/styled";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
