import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 100vh;
  transition: background-color 500ms;

  ${({ showMenu }) =>
    !showMenu &&
    css`
      visibility: hidden;
      animation-name: overlay-hide;
      animation-duration: 500ms;
    `}

  @keyframes overlay-hide {
    from {
      visibility: visible;
    }
    to {
      visibility: hidden;
    }
  }

  ${({ showMenu }) =>
    showMenu &&
    css`
      background-color: #00001a80;
      /* animation-name: overlay-show;
      animation-duration: 400ms; */
    `}

  /* @keyframes overlay-show {
    from {
      visibility: hidden;
      opacity: 0;
    }
    1% {
      visibility: visible;
    }
  } */
`;
