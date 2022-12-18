import { StyledSidebar, Heading } from "./styled";
import Article from "./Article";

const Sidebar = ({ articles }) => {
  const newArticles = articles.filter((article) => article.new);

  return (
    <StyledSidebar>
      <Heading>New</Heading>
      {newArticles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
