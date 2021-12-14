import { Container } from "react-bootstrap";
import AboutMe from "./AboutMe";
import HomeProgetti from "./HomeProgetti";

const Home = (props) => {
  return (
    <Container className="home-container" id="home">
      <AboutMe/>
      <HomeProgetti props={props}/>
    </Container>
  );
};

export default Home;
