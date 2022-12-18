import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin: 70px 0 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: ${({theme}) => theme.mobile}px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
  }
`;