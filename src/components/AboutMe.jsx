const AboutMe = () => {
  return (
    <div className="container" id="about-me">
      <div className="title-container">
        <h2>ABOUT ME</h2>
        <div className="line"></div>
      </div>

      <div className="about-me-inner-container">
        <div className="text-about-me-cont">
          <span>Ciao, sono Simone Risi...</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="video-about-me-cont">
          <iframe
            className="youtube-about-me"
            src="https://www.youtube.com/embed/oMltzYWxjS4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
