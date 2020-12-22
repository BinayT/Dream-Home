import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Slide from './Slide/Slide';
import './Slider.scss';

function Slider({ slides }) {
  return (
    <section className='slider'>
      <div className='slider__wrapper'>
        {slides.map((el) => (
          <Slide key={el.title} items={el} />
        ))}
      </div>
      <div className='slider__buttons'>
        <FaArrowLeft className='arrow__buttons' />
        <FaArrowRight className='arrow__buttons' />
      </div>
    </section>
  );
}

export default Slider;
