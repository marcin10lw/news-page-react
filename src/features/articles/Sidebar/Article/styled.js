import styled from "styled-components";

export const StyledArticle = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
  word-break: break-word;
  padding: 40px 0;

  h2 {
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 18px;
    line-height: 1.6;
    margin: 20px 0 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Link = styled.a`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.offWhite};
  transition: color 200ms;
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.softOrange};
  }
`;
