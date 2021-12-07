import { Container } from "react-bootstrap";
import AboutMe from "./AboutMe";
import TopCarousel from "./Carousel";
import HomeProgetti from "./HomeProgetti";

const Home = (props) => {
  return (
    <Container className="home-container" id="home">
      <TopCarousel/>
      <AboutMe/>
      <HomeProgetti props={props}/>
    </Container>
  );
};

export default Home;
