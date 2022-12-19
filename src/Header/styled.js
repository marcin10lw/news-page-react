import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 80px 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    padding: 40px 0;
  }
`;

export const Logo = styled.img``;
