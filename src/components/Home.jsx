import AboutMe from "./AboutMe";
import Contattami from "./Contattami";
import HomeProgetti from "./HomeProgetti";
import Carousel1 from "./Carousel1/Carousel1.jsx";

const Home = (props) => {
  return (
    <div className="big-container home">
      <Carousel1 props={props} />
      <Contattami props={props} />
      <AboutMe />
      <HomeProgetti props={props} />
    </div>
  );
};

export default Home;
