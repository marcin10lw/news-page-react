import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const Image = styled.img`
  max-width: 100%;
  grid-column: span 2;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 64px;
  margin: 0;
`

export const Content = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  margin: 0;
  line-height: 1.6;
  font-size: 18px;
`
export const Button = styled.button`
  border: none;
  color: ${({theme}) => theme.colors.offWhite};
  background-color: ${({theme}) => theme.colors.softRed};
  letter-spacing: 3px;
  font-size: 20px;
  padding: 16px 40px;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({theme}) => theme.colors.veryDarkBlue};
  }
`