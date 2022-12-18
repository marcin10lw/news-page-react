import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container/styled";
import Header from "./Header";
import { Grid } from "./Grid/styled";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import articlesData from "./articlesData";
import { nanoid } from "nanoid";

function App() {
  const articles = articlesData.map(article => ({...article, id: nanoid()}))

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
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
