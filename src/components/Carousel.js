import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Carousel.css";

import avengersImage from "../avengers.jpg"; // Ensure correct file name and path
import batmanImage from "../batman.jpg";
function MovieCarousel() {
  return (
    <div style={{ width: "90vw",maxWidth:"800px", margin: "auto"}}> {/* Centered and width fixed */}
      <Carousel >
        <Carousel.Item>
          <img className="d-block w-100" src={avengersImage} alt="First slide"
          style={{ height: "500px", objectFit: "fill" }} />
          <Carousel.Caption>
            <h3>Avengers Endgame</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={batmanImage} alt="Batman"style={{ height: "500px", objectFit: "fill" }} />
          <Carousel.Caption>
            <h3>Batman Arkham</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
