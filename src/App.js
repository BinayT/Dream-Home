import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import { sliderData } from './data/SliderData';

function App() {
  return (
    <>
      <Navbar />
      <Slider slides={sliderData} />
    </>
  );
}

export default App;
