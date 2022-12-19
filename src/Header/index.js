import { Logo, StyledHeader } from "./styled";
import Nav from "../Nav";
import Hamburger from "../Hamburger/styled";

const Header = ({ toggleShowMenu, showMenu }) => (
  <StyledHeader>
    <Logo src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} />
    <Hamburger showMenu={showMenu} onClick={toggleShowMenu} />
    <Nav header={true} />
  </StyledHeader>
);

export default Header;
