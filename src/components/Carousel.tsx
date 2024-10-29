import React, { useState } from 'react';

interface CarouselProps {
  images: { url: string; caption: string }[]; 
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Image container with 3:2 aspect ratio */}
      <div className="relative overflow-hidden h-[400px] aspect-w-3 aspect-h-2 rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            {/* Caption box */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
              <p className="text-sm px-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
