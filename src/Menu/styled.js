import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  height: 100%;
  width: 70%;
  position: absolute;
  right: 0;
  z-index: 2;

  nav {
    margin-top: 180px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 16px 20px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.veryDarkBlue};
  }

  ${({ showMenu }) =>
    showMenu &&
    css`
      animation-name: menu-show;
      animation-duration: 250ms;
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
