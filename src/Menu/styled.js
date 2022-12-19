import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  height: 100%;
  width: 70%;
  position: absolute;
  right: 0;
  z-index: 2;

  ${({ showMenu }) =>
    showMenu &&
    css`
      animation-name: menu-show;
      animation-duration: 150ms;
    `}

  ${({ showMenu }) =>
    !showMenu &&
    css`
      visibility: hidden;
    `}

  @keyframes menu-show {
    from {
      visibility: hidden;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
