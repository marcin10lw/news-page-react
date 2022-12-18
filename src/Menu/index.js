import { StyledMenu } from "./styled";
import Hamburger from "../Hamburger/styled";

const Menu = ({ showMenu }) => {
  return (
    <StyledMenu showMenu={showMenu}>
      <nav>
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
      </nav>
    </StyledMenu>
  );
};

export default Menu;
