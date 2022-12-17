import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 80px 40px 60px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  a {
    color: grey;
    cursor: pointer;

    &:hover {
      opacity: 0.80;
    }
  }
`;
