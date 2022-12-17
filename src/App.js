import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container/styled";
import Header from "./Header";
import { Grid } from "./Grid/styled";
import Main from "./Main";
import Sidebar from "./Sidebar";
import articles from "./articles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <Grid>
            <Main />
            <Sidebar articles={articles} />
          </Grid>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
