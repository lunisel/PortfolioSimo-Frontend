const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="text-about-me-cont"></div>
      <div className="video-about-me-cont">
        <iframe
          src="https://www.youtube.com/watch?v=oMltzYWxjS4&ab_channel=ShowItBetter"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutMe;
