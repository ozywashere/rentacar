import React from 'react';
import Brands from '@/app/components/Brands';
import CarSlider from '@/app/components/CarSlider';

const Cars = () => {
  return (
    <section id="cars" className="section h-screen flex flex-col items-center">
      <Brands />
      <CarSlider />
    </section>
  );
};

export default Cars;
