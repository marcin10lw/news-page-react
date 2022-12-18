import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;

  @media (max-width: ${({theme}) => theme.mobile}px) {
    padding: 0 20px;
  }
`