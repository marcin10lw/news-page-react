import styled, { css } from "styled-components";

const Hamburger = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-image: url("./assets/images/icon-menu.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 2;

  ${({ showMenu }) =>
    showMenu &&
    css`
      background-image: url("./assets/images/icon-menu-close.svg");
    `}

  @media (min-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }
`;

export default Hamburger;
