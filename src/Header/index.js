import { Logo, StyledHeader, Nav } from "./styled";

const Header = () => (
  <StyledHeader>
    <Logo src="./assets/images/logo.svg" />
    <Nav>
      <ul>
        <li><a>Home</a></li>
        <li><a>New</a></li>
        <li><a>Popular</a></li>
        <li><a>Trending</a></li>
        <li><a>Categories</a></li>
      </ul>
    </Nav>
  </StyledHeader>
);

export default Header;
