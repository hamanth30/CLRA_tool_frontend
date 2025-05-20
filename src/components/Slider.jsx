import React, { useState } from 'react';

const images = [
  'src/assets/slider1.jpg',
  'src/assets/slider2.png',
  'src/assets/slider3.png',
  'src/assets/slider4.png',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    
    <div className="relative p-2 mt-2 mb-4 h-[70vh] w-full overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="rounded-lg w-full h-full object-cover transition duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="rounded-lg absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-gradient-to-r from-pink-400 to-pink-600 text-black rounded-full p-3 shadow-md transition duration-300"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="rounded-lg absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-gradient-to-l from-pink-400 to-pink-600 text-black rounded-full p-3 shadow-md transition duration-300"
      >
        &#8594;
      </button>
    </div>
    
  );
};

export default ImageSlider;