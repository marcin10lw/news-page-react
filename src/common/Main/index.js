import { StyledMain, Image, Heading, Content, Button, Flex } from "./styled";

const Main = () => (
  <StyledMain>
    <Image desktop src={`${process.env.PUBLIC_URL}/assets/images/image-web-3-desktop.jpg`} alt="main article" />
    <Image mobile src={`${process.env.PUBLIC_URL}/assets/images/image-web-3-mobile.jpg`} alt="main article" />
    <Heading>The Bright Future of Web 3.0?</Heading>
    <Flex>
      <Content>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </Content>
      <Button>READ MORE</Button>
    </Flex>
  </StyledMain>
);

export default Main;
