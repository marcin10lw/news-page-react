import { StyledArticle } from "./styled";

const Article = ({ title, content }) => (
  <StyledArticle>
    <h3>{title}</h3>
    <p>{content}</p>
  </StyledArticle>
);

export default Article;