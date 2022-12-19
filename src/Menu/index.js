import { StyledMenu } from "./styled";
import Nav from "../Nav";

const Menu = ({ showMenu }) => {
  return (
    <StyledMenu showMenu={showMenu}>
      <Nav menu={true} />
    </StyledMenu>
  );
};

export default Menu;
