import { Carousel} from "react-bootstrap";

const TopCarousel = () => {
    return(
        <Carousel fade id="carousel">
        <Carousel.Item className="first-slide">
          <img
            className="first-slide-img"
            src="https://www.ronenbekerman.com/wp-content/uploads/2018/07/3d-max-realistic-render-house-exterior.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="first-slide-caption">
            <h3>Rendering 3D Esterni</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="first-slide">
          <img
            className="first-slide-img"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79dbd63251579.560c629f2eec8.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="first-slide-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="first-slide">
          <img
            className="first-slide-img"
            src="https://uploads-ssl.webflow.com/5894a32730554b620f7bf36d/5e848c30ae1ad81ed3ffa5df_5d14d33d86e4be76bae28c2e_What-Performance-Specs-Should-Your-PC-Have-to-Handle-3D-Rendering-EASY-RENDER.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className="first-slide-caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default TopCarousel