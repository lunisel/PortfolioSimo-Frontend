import { Container } from "react-bootstrap";
import AboutMe from "./AboutMe";
import TopCarousel from "./Carousel";

const Home = () => {
  return (
    <Container>
      <TopCarousel/>
      <AboutMe/>
    </Container>
  );
};

export default Home;
