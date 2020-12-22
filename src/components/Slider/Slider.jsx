import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Slide from './Slide/Slide';
import './Slider.scss';

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  return (
    <section className='slider'>
      <div className='slider__wrapper'>
        {slides.map((el, i) => (
          <Slide key={i} index={i} items={el} current={current} />
        ))}
      </div>
      <div className='slider__buttons'>
        <FaArrowLeft className='arrow__buttons' onClick={prevSlide} />
        <FaArrowRight className='arrow__buttons' onClick={nextSlide} />
      </div>
    </section>
  );
}

export default Slider;
