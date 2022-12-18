import { StyledArticle, Link } from "./styled";

const Article = ({ title, content }) => (
  <StyledArticle>
    <Link href="">{title}</Link>
    <p>{content}</p>
  </StyledArticle>
);

export default Article;