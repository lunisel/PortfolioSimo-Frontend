import AboutMe from "./AboutMe";
import Contattami from "./Contattami";
import HomeProgetti from "./HomeProgetti";
import Jumbotron from "./Jumbotron";

const Home = (props) => {
  return (
    <div className="big-container home">
      <Jumbotron props={props}/>
      <Contattami props={props}/>
      <AboutMe/>
      <HomeProgetti props={props}/>
    </div>
  );
};

export default Home;
