import {RiArrowRightSLine} from "react-icons/ri"

const Jumbotron = ({ props }) => {
  return (
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
            Nulla vitae elit libero, a pharetra augue mollis interdum lorem
            ipsum morea nulla.
          </p>

          <button>Guarda altro <RiArrowRightSLine/></button>
        </div>
    </div>
  );
};

export default Jumbotron;
