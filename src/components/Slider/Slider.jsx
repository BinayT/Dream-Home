import React from 'react';
import { sliderData } from '../../data/SliderData';

import './Slider.scss';

function Slider() {
  return (
    <section className='slider'>
      <div className='slider__wrapper'>
        {sliderData.map((el) => (
          <Slide key={el.title} items={el} />
        ))}
      </div>
    </section>
  );
}

export default Slider;
