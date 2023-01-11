import { Container } from "./common/Container/styled";
import Header from "./features/menu/Header";
import Menu from "./features/menu/Menu";
import { Grid } from "./common/Grid/styled";
import Main from "./common/Main";
import Sidebar from "./features/articles/Sidebar";
import Footer from "./features/articles/Footer";
import { Overlay } from "./features/menu/Overlay/styled";
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
    <>
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
  );
}

export default App;
