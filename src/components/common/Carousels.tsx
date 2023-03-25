import { Carousel } from "react-bootstrap"

export const Carousels: React.FC<{}> = () => {
  return (
    <div className="App">
      <Carousel slide={false} interval={null}>
        <Carousel.Item>
          <img
            className="d-block"
            src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
            alt="First slide"
            width="151"
            height="233"
          />
          <Carousel.Caption>
            <h3 className="carousel-label">First slide label</h3>
            <p>First slide caption</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
            alt="Second slide"
            width="151"
            height="233"
          />
          <Carousel.Caption>
            <h3 className="carousel-label">Second slide label</h3>
            <p>Second slide caption</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
