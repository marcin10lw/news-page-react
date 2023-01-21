import { Container } from "./common/Container/styled";
import Header from "./features/menu/Header";
import Menu from "./features/menu/Menu";
import { Grid } from "./common/Grid/styled";
import Main from "./common/Main";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import { Overlay } from "./features/menu/Overlay/styled";
import { useSelector } from "react-redux";
import { selectMenu } from "./features/menu/menuSlice";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { showMenu } = useSelector(selectMenu);

  return (
    <>
      <GlobalStyle showMenu={showMenu} />
      <Container>
        <Menu />
        <Overlay showMenu={showMenu} />
        <Header />
        <Grid>
          <Main />
          <Sidebar />
        </Grid>
        <Footer />
      </Container>
    </>
  );
}

export default App;
