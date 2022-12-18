import { StyledMain, Image, Heading, Content, Button } from "./styled";
import { Flex } from "../Flex/styled";

const Main = () => (
  <StyledMain>
    <Image desktop src="./assets/images/image-web-3-desktop.jpg" />
    <Image mobile src="./assets/images/image-web-3-mobile.jpg" />
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
