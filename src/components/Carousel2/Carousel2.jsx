import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./carousel2.css";

const Carousel2 = ({ props }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    if (activeSlide === 3) {
      setActiveSlide(1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 1) {
      setActiveSlide(3);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="big-container carousel" id="calousel1">
      <div className={activeSlide === 1 ? "slide active" : "slide"}>
        <div className="big-container carousel2">
          <div className="carousel2-background">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1640807707/risiGraph/kpm7z5ygvfmk41ggsuqg.jpg"
              alt=""
            />
          </div>
          <div className="container carousel2">
            <h1 className="carousel2-title three">IL MIO PORTFOLIO</h1>
            <p className="carousel2-sub-text">
              Immergiti nel mondo del disegno 3D{" "}
            </p>
            <button onClick={() => props.history.push("/progetti")}>
              Scopri ora
            </button>
          </div>
        </div>
      </div>

      <div className={activeSlide === 2 ? "slide active" : "slide"}>
        <div className="big-container carousel2">
          <div className="carousel2-background">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1640807728/risiGraph/j1j2ailm9qefdrx29bmp.jpg"
              alt=""
            />
          </div>
          <div className="container carousel2">
            <h1 className="carousel2-title three">IL MIO PORTFOLIO</h1>
            <p className="carousel2-sub-text">
              Immergiti nel mondo del disegno 3D{" "}
            </p>
            <button onClick={() => props.history.push("/progetti")}>
              Scopri ora
            </button>
          </div>
        </div>
      </div>

      <div className={activeSlide === 3 ? "slide active" : "slide"}>
        <div className="big-container carousel2">
          <div className="carousel2-background">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1640807312/risiGraph/ln1lfcekvqgfmiioav7d.jpg"
              alt=""
            />
          </div>
          <div className="container carousel2">
            <h1 className="carousel2-title three">IL MIO PORTFOLIO</h1>
            <p className="carousel2-sub-text">
              Immergiti nel mondo del disegno 3D{" "}
            </p>
            <button onClick={() => props.history.push("/progetti")}>
              Scopri ora
            </button>
          </div>
        </div>
      </div>
      <MdArrowBackIos onClick={() => nextSlide()} id="prev" />
      <MdArrowForwardIos onClick={() => prevSlide()} id="next" />
    </div>
  );
};

export default Carousel2;
