import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  a {
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    font-size: 20px;
    transition: color 200ms;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${({theme}) => theme.colors.softRed};
    }
  }

  @media (max-width: ${({theme}) => theme.mobile}px) {
    display: none;
  }
`;