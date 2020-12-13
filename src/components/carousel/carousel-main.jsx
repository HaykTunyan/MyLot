import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel-main.scss';
import MERCEDES from '../../assets/images/Carousel/mercedes.jpg';
import porche from '../../assets/images/Carousel/porche.png';
import BMW from '../../assets/images/Carousel/bmw_x6_2020.jpg';
import { useIntl } from 'react-intl';

const CarouselMain = () => {
  const intl = useIntl();
  return (
    <div className="carousel-main">
      <Carousel>
        <Carousel.Item className="carosuel-item">
          <div className="carousel-slide">
            <div className="carousel-img">
              <img
                src={MERCEDES}
                alt="MERCEDES"
                className="carosuel-item-one"
              />
              <div className="first-animate">
                <p className="first-text">
                  {intl.messages.carousel.text_item_one}
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carosuel-item">
          <div className="carousel-slide">
            <div className="carousel-img">
              <img src={porche} alt="PORCHE" className="carosuel-item-one" />
              <div className="first-animate">
                <p className="second-text">
                  {intl.messages.carousel.text_item_two}
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carosuel-item">
          <div className="carousel-slide">
            <div className="carousel-img">
              <img src={BMW} alt="BMW-X6-2020" className=" carousel-images" />
              <div className="first-animate">
                <p className="third-text">
                  {intl.messages.carousel.text_item_three}
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
