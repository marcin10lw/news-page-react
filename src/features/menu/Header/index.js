import { Logo, StyledHeader } from "./styled";
import Nav from "../../menu/Nav";
import Hamburger from "../../menu/Hamburger/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "../menuSlice";
import { toggleShowMenu } from "../menuSlice";

const Header = () => {
  const { showMenu } = useSelector(selectMenu);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
        alt="homepage"
      />
      <Hamburger
        showMenu={showMenu}
        onClick={() => dispatch(toggleShowMenu())}
      />
      <Nav header={true} />
    </StyledHeader>
  );
};

export default Header;
