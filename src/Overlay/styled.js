import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  opacity: 0.5;

  ${({ showMenu }) =>
    !showMenu &&
    css`
      visibility: hidden;
    `}

  ${({ showMenu }) =>
    showMenu &&
    css`
      animation-name: overlay-show;
      animation-duration: 250ms;
    `}

    @keyframes overlay-show {
    from {
      visibility: hidden;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;
