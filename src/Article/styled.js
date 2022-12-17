import styled from "styled-components";

export const StyledArticle = styled.article`
  border-bottom: 1px solid ${({theme}) => theme.colors.grayishBlue};
  word-break: break-all;
  padding: 30px 0;

  h3 {
    font-size: 21px;
    color: ${({theme}) => theme.colors.offWhite};
    transition: color 200ms;
    cursor: pointer;
    margin: 0;

    &:hover {
      color: ${({theme}) => theme.colors.softOrange};
    }
  }

  p {
    color: ${({theme}) => theme.colors.grayishBlue};
    font-size: 16px;
    line-height: 1.6;
    margin: 10px 0 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
