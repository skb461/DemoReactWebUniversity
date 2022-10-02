import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image_1 from './image/drone-(edited).jpg'
import image_2 from './image/IMG_4598(edited).jpg'
import image_3 from './image/IMG_4736(edited).jpg'

function Resedent_Carusal() {
  return (
    <Carousel fade className="justify-content-center bg-dark">
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={image_1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={image_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={image_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Resedent_Carusal;