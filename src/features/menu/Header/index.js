import { Logo, StyledHeader } from "./styled";
import Nav from "../../menu/Nav";
import Hamburger from "../../menu/Hamburger/styled";

const Header = ({ toggleShowMenu, showMenu }) => (
  <StyledHeader>
    <Logo src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="homepage" />
    <Hamburger showMenu={showMenu} onClick={toggleShowMenu} />
    <Nav header={true} />
  </StyledHeader>
);

export default Header;
