import { StyledFooter } from "./styled";
import Related from "./Related";
import { useSelector } from "react-redux";
import { selectArticles } from "../articlesSlice";

const Footer = () => {
  const { articles } = useSelector(selectArticles);
  const filteredArticles = articles.filter((article) => !article.new);
  const relatedArticles = filteredArticles.map((article) => ({
    ...article,
    number: filteredArticles.indexOf(article) + 1,
  }));

  return (
    <StyledFooter>
      {relatedArticles.map((relatedArticle) => (
        <Related
          key={relatedArticle.id}
          image={relatedArticle.image}
          number={relatedArticle.number}
          title={relatedArticle.title}
          content={relatedArticle.content}
        />
      ))}
    </StyledFooter>
  );
};

export default Footer;
