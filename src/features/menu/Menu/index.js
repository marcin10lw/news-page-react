import { StyledMenu } from "./styled";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "../menuSlice";

const Menu = () => {
  const { showMenu } = useSelector(selectMenu);

  return (
    <StyledMenu showMenu={showMenu}>
      <Nav menu={true} />
    </StyledMenu>
  );
};

export default Menu;
