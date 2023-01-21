import styled from "styled-components";

export const StyledRelated = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Image = styled.img`
  max-width: 6.25rem;
  max-width: clamp(6.25rem, 5.79rem + 1.95vw, 7.5rem);
  height: 100%;
  object-fit: cover;
`;

export const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Number = styled.div`
  font-size: 2.125rem;
  font-size: clamp(2.125rem, 1.99rem + 0.59vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Link = styled.a`
  margin: 0;
  font-size: 1.0625rem;
  font-size: clamp(1.0625rem, 0.99rem + 0.29vw, 1.25rem);
  font-weight: 800;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: color 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors.softRed};
  }
`;

export const Content = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.78rem + 0.39vw, 1.125rem);
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
