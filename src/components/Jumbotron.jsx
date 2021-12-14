const Jumbotron = ({ props }) => {
  return (
    <div className="big-container">
      <img
        src="https://www.ronenbekerman.com/wp-content/uploads/2018/07/3d-max-realistic-render-house-exterior.jpg"
        alt="render of house"
        className="jumbotron-background"
      />
      <div className="container">
        <h1 className="jumbotron-title">
          I migliori render per il tuo progetto
        </h1>
      </div>
    </div>
  );
};

export default Jumbotron;
