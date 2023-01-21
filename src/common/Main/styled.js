import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  grid-column: span 2;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    grid-column: 1;
    width: 100%;
  }

  ${({ desktop }) =>
    desktop &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}px) {
        display: none;
      }
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      @media (min-width: ${({ theme }) => theme.mobile}px) {
        display: none;
      }
    `}
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 2.625rem;
  font-size: clamp(2.625rem, 2.12rem + 2.15vw, 4rem);
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  margin: 0;
  line-height: 1.6;
  font-size: 0.9375rem;
  font-size: clamp(0.9375rem, 0.87rem + 0.29vw, 1.125rem);
`;
export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.offWhite};
  background-color: ${({ theme }) => theme.colors.softRed};
  letter-spacing: 3px;
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.74rem + 0.59vw, 1.25rem);
  padding: 16px 40px;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  }
`;
