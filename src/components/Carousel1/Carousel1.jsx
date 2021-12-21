import { useEffect, useRef, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import "./carousel1.css";

const Carousel1 = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const autoPlay = useRef();

  useEffect(() => {
    autoPlay.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlay.current();
    };

    const interval = setInterval(play, 10000);
  }, []);

  const nextSlide = () => {
    if (activeSlide === 3) {
      setActiveSlide(1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className="big-container carousel">
      <div className={activeSlide === 1 ? "slide active" : "slide"}>
        <div className="big-container jumbotron">
          <div className="jumbotron-background">
            <img
              src="https://www.ronenbekerman.com/wp-content/uploads/2018/07/3d-max-realistic-render-house-exterior.jpg"
              alt="render of house"
            />
          </div>
          <div className="container jumbotron">
            <h1 className="jumbotron-title">
              I migliori render per il tuo progetto
            </h1>
            <p className="jumbotron-sub-text">
              Dai valore ai tuoi progetti con la potenza della modellazione 3D
            </p>
          </div>
        </div>
      </div>

      <div className={activeSlide === 2 ? "slide active" : "slide"}>
        <div className="big-container jumbotron">
          <div className="jumbotron-background">
            <img
              src="https://3dream.it/wp-content/uploads/2020/11/planimetria-appartamento-4.jpg"
              alt="render of house"
            />
          </div>
          <div className="container jumbotron">
            <h1 className="jumbotron-title">
              Trasforma le tue semplici piante in piante d'impatto
            </h1>
            <p className="jumbotron-sub-text">
              Dai valore ai tuoi progetti con la potenza della modellazione 3D
            </p>
          </div>
        </div>
      </div>

      <div className={activeSlide === 3 ? "slide active" : "slide"}>
        <div className="big-container jumbotron">
          <div className="jumbotron-background">
            <iframe
              src="https://www.youtube.com/embed/9AWUQrBHqwo?controls=0&loop=1&autoplay=1&mute=1"
              title="YouTube video player"
            ></iframe>
          </div>
          <div className="container jumbotron">
            <h1 className="jumbotron-title three">
              Realizza video rendering sorprendenti per il tuo progetto
            </h1>
            <p className="jumbotron-sub-text">
              Dai valore ai tuoi progetti con la potenza della modellazione 3D
            </p>
          </div>
        </div>
      </div>

      <div className="dots-container">
        <GoPrimitiveDot
          className={activeSlide === 1 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(1)}
        />
        <GoPrimitiveDot
          className={activeSlide === 2 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(2)}
        />
        <GoPrimitiveDot
          className={activeSlide === 3 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(3)}
        />
      </div>
    </div>
  );
};

export default Carousel1;
