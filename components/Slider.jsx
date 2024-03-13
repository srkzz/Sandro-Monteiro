import React from 'react';
import Carousel from './Carousel';

const slides = [
  "./assets/images/jante.PNG",
  "./assets/images/Peca1.PNG",
  "./assets/images/Peca2.png",
  "./assets/images/alfinete.png",
  "./assets/images/audi.PNG",
  "./assets/images/balljoint.png",
  "./assets/images/bispo.png",
  "./assets/images/bolabasket.PNG",
  "./assets/images/cadeira.png",
  "./assets/images/clip.png",
  "./assets/images/ferramenta1.png",
  "./assets/images/pecacomfuros.png",
  "./assets/images/pokebola.PNG",
  "./assets/images/tabuleiro.png",
  "./assets/images/torre.PNG",
  "./assets/images/sandro.jpg",
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
