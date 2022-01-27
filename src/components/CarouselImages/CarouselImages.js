import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const CarouselImages = ({ image }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="bg bg-secondary"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Imagen 1" />
        <Carousel.Caption>
          <h3>Imagen l</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Imagen 2" />

        <Carousel.Caption>
          <h3>Imagen 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Imagen 3" />

        <Carousel.Caption>
          <h3>Imagen 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImages;
