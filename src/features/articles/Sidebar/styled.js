import styled from "styled-components";

export const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 35px 30px;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.softOrange};
  margin: 0;
  font-size: 42px;
`;
