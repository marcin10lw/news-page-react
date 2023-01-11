import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 430px;
  gap: 30px;

  @media (max-width: ${({theme}) => theme.mobile}px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`