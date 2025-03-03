import { useState } from "react";
import './Carousel.scss'

interface ICarouselProps {
  children: React.ReactNode[]; // O un array de componentes
}

export const Carousel: React.FC<ICarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para cambiar de diapositiva
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel">
      <div className="carousel__content">
        <p>
          {children[currentIndex === 0 ? children.length - 1 : currentIndex - 1]}
        </p>
        <p>
          {children[currentIndex]}
        </p>
        <p>
          {children[currentIndex === 4 ? 0 : currentIndex + 1]}
        </p>
      </div>

      <div className="carousel__navigation">
        <button onClick={handlePrev} className="carousel__arrow carousel__arrow--left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" fill="inherit" fill-opacity="0.3" />
          </svg>

        </button>

        <div className="carousel__indicators">
          {children.map((_, index) => (
            <span
              key={index}
              className={`carousel__indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button onClick={handleNext} className="carousel__arrow carousel__arrow--right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" fill="inherit" />
          </svg>
        </button>
      </div>

    </div>
  )

}
