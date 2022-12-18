import { StyledRelated, Image, Number, Content, Flex, Link } from "./styled";

const Related = ({ image, number, title, content }) => (
  <StyledRelated>
      <Image src={image} />
    <Flex>
      <Number>0{number}</Number>
      <Link>{title}</Link>
      <Content>{content}</Content>
    </Flex>
  </StyledRelated>
);

export default Related;
