import styled, { css } from "styled-components";

const Hamburger = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: transparent;
  background-image: url(${`${process.env.PUBLIC_URL}/assets/images/icon-menu.svg`});
  background-repeat: no-repeat;
  background-position: center;
  transition-delay: 10ms;
  transition-property: background-image;
  

  ${({ showMenu }) =>
    showMenu &&
    css`
      background-image: url(${`${process.env.PUBLIC_URL}/assets/images/icon-menu-close.svg`});
      z-index: 2;
    `}

  @media (min-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }
`;

export default Hamburger;
