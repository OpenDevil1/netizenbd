import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
class MyCarousel extends Component {
  render() {
    return (
      <div>
       <Carousel>
        <Carousel.Item>
            <img
            src="https://i.ytimg.com/vi/k6GABJ29SVc/maxresdefault.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className="carousel-text">Our Mission</h3>
            <p className="carousel-text">Simplifying your business operation and lifestyle through digital integration.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="https://i.ytimg.com/vi/k6GABJ29SVc/maxresdefault.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className="carousel-text">Our Mission</h3>
            <p className="carousel-text">Simplifying your business operation and lifestyle through digital integration.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="https://i.ytimg.com/vi/k6GABJ29SVc/maxresdefault.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className="carousel-text">Our Mission</h3>
            <p className="carousel-text">Simplifying your business operation and lifestyle through digital integration.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>;
      </div>
    );
  }
}

export default MyCarousel;
