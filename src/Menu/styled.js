import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  height: 100vh;
  position: fixed;
  right: 0;
  z-index: 2;
  transition: width 200ms ease;

  ${({ showMenu }) =>
    showMenu &&
    css`
      width: 70%;
    `}

  ${({ showMenu }) =>
    !showMenu &&
    css`
      width: 0;
    `}
`;
