import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Carousel.css'

const Carousell = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'assets/images/hero_bg_2.jpg'}
            alt="First slide"
            style={{ height: '35em' }}
          />
          <Carousel.Caption>
            <h3>Never stop exploring</h3>
            <p>People forget years and remember moments</p>
            <br />
            <p>
              <Link to={'/'} className="btn btn-primary py-3 px-5 text-white">
                Book Now!
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'assets/images/hero_bg_1.jpg'}
            alt="Second slide"
            style={{ height: '35em' }}
          />

          <Carousel.Caption>
            <h3>Stays in the best places</h3>
            <p>the best places to be in the whole world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'assets/images/hero_bg_3.jpg'}
            alt="Third slide"
            style={{ height: '35em' }}
          />

          <Carousel.Caption>
            <h3>Find new challenges</h3>
            <p>We travel not to escape life but for life not to escape us</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
