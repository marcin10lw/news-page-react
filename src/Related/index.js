import { StyledRelated, Image, Number, Title, Content } from "./styled";

const Related = ({ image, number, title, content }) => (
  <StyledRelated>
    <Image src={image} />
    <Number>{number}</Number>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </StyledRelated>
);

export default Related;