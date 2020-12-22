import React, { useState } from 'react';

import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import { sliderData } from './data/SliderData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Slider slides={sliderData} />
    </>
  );
}

export default App;
