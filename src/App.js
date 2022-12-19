import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container/styled";
import Header from "./Header";
import Menu from "./Menu";
import { Grid } from "./Grid/styled";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Overlay } from "./Overlay/styled";
import articlesData from "./articlesData";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const articles = articlesData.map((article) => ({
    ...article,
    id: nanoid(),
  }));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Menu showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
          <Overlay showMenu={showMenu} />
          <Header showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
          <Grid>
            <Main />
            <Sidebar articles={articles} />
          </Grid>
          <Footer articles={articles} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
