import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

export const Image = styled.img`
  width: 100%;
  grid-column: span 2;
`;

export const Header = styled.h1`
  font-weight: 800;
`

export const Content = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
`
export const Button = styled.button`
  border: none;
  color: ${({theme}) => theme.colors.offWhite};
  background-color: ${({theme}) => theme.colors.softRed};
`