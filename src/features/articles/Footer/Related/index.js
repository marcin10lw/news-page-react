import { StyledRelated, Image, Number, Content, Flex, Link } from "./styled";

const Related = ({ image, number, title, content }) => (
  <StyledRelated>
      <Image src={image} alt="related article" />
    <Flex>
      <Number>0{number}</Number>
      <Link href="">{title}</Link>
      <Content>{content}</Content>
    </Flex>
  </StyledRelated>
);

export default Related;
