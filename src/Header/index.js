import { Logo, StyledHeader } from "./styled";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Header = () => (
  <StyledHeader>
    <Logo src="./assets/images/logo.svg" />
    <Hamburger />
    <Nav />
  </StyledHeader>
);

export default Header;
