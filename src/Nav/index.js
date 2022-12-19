import { StyledNav } from "./styled";

const Nav = ({ menu, header }) => (
  <StyledNav menu={menu} header={header}>
    <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">New</a>
      </li>
      <li>
        <a href="">Popular</a>
      </li>
      <li>
        <a href="">Trending</a>
      </li>
      <li>
        <a href="">Categories</a>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
