import styled from "styled-components";

export const StyledRelated = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Image = styled.img`
  max-width: 120px;
`;

export const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Number = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Link = styled.a`
  margin: 0;
  font-size: 20px;
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
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
