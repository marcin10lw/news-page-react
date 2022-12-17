import { StyledSidebar, Heading } from "./styled";
import { Flex } from "../Flex/styled";
import Article from "../Article";

const Sidebar = ({ articles }) => {
  const newArticles = articles.filter(article => article.new);
  console.log(newArticles);
  
  return (
    <StyledSidebar>
        <Heading>New</Heading>
        {newArticles.map(article => <Article title={article.title} content={article.content} />)}
    </StyledSidebar>
  );
};

export default Sidebar;
