import { StyledArticle, Link } from "./styled";

const Article = ({ title, content }) => (
  <StyledArticle>
    <h2><Link href="">{title}</Link></h2>
    <p>{content}</p>
  </StyledArticle>
);

export default Article;