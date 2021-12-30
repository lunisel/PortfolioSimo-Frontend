import AboutMe from "./AboutMe";
import Contattami from "./Contattami";
import Carousel1 from "./Carousel1/Carousel1.jsx";
import Carousel2 from "./Carousel2/Carousel2";

const Home = (props) => {
  return (
    <div className="big-container home">
      <Carousel1 props={props} />
      <Contattami props={props} />
      <AboutMe />
      <Carousel2 props={props} />
    </div>
  );
};

export default Home;
