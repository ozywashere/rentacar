'use client';
//image
import Image from 'next/image';

//framer
import { motion } from 'framer-motion';
import { fadeIn } from '/variant.js';
const Brands = () => {
  return (
    <div className="xl:pt-16 xl:h-[200px] w-full  flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 xl:grid-cols-auto gap-6">
          <div>
            <Image src={'icons/brands/ford.svg'} width={85} height={32} alt="ford" />
          </div>
          <div>
            <Image src={'icons/brands/mercedes.svg'} width={60} height={60} alt="mercedes" />
          </div>
          <div>
            <Image src={'icons/brands/audi.svg'} width={85} height={50} alt="audi" />
          </div>
          <div>
            <Image src={'icons/brands/bmw.svg'} width={60} height={60} alt="bmw" />
          </div>
          <div>
            <Image src={'icons/brands/vw.svg'} width={60} height={60} alt="vw" />
          </div>
          <div>
            <Image src={'icons/brands/skoda.svg'} width={60} height={60} alt="skoda" />
          </div>
          <div>
            <Image src={'icons/brands/mazda.svg'} width={60} height={60} alt="mazda" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
