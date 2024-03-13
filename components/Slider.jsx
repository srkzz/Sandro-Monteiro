import React from 'react';
import Carousel from './Carousel';

const slides = [
  "./assets/images/jante.PNG",
  "./assets/images/Peca1.PNG",
  "./assets/images/Peca2.png",
  "./assets/images/alfinete.png",
  "./assets/images/audi.png",
   "./assets/images/balljoint.png",
   "./assets/images/bispo.png",
   "./assets/images/bolabasket.png",
   "./assets/images/cadeira.png",
   "./assets/images/clip.png",
   "./assets/images/ferramenta1.png",
   "./assets/images/pecacomfuros.png",
    "./assets/images/pokebola.png",
    "./assets/images/tabuleiro.png",
    "./assets/images/torre.png",
    "./assets/images/sandro.png",
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
