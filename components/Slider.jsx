import React from 'react';
import Carousel from './Carousel';

const slides = [
  "./assets/images/Diamante.PNG",
  "./assets/images/Cadeira.png",
  "./assets/images/Tabuleiro.png",
  "./assets/images/Torre_ v1.png",
];


function Slider() {
          return (
            <div className="glassmorphism">
              <Carousel autoSlide={true}>
                {slides.map((s, index) => (
                  <img key={index} src={s} className="object-contain w-full h-64 md:h-72 lg:h-80 xl:h-96" />
                ))}
              </Carousel>
            </div>
          );
        }

export default Slider
