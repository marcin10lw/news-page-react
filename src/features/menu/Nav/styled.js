import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  a {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    font-size: 20px;
    text-decoration: none;
  }

  ${({ header }) =>
    header &&
    css`
      a {
        transition: color 200ms;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.softRed};
        }
      }

      @media (max-width: ${({ theme }) => theme.mobile}px) {
        display: none;
      }
    `}

  ${({ menu }) =>
    menu &&
    css`
      ul {
        flex-direction: column;
        align-items: flex-start;
        margin: 200px 0;
      }

      a {
        color: ${({ theme }) => theme.colors.veryDarkBlue};
      }

      @media (min-width: ${({ theme }) => theme.mobile}px) {
        display: none;
      }
    `}
`;
