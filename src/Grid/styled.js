import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: ${({theme}) => theme.mobile}px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, auto);
    gap: 50px;
  }
`