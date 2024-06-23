'use client';
import Image from 'next/image';
import Search from './Search';
import { useSearchContext } from '../context/search';
import { fadeIn } from '../../../variant';
import { motion, easeInOut } from 'framer-motion';

const Hero = () => {
  const { searchActive } = useSearchContext();
  return (
    <section className="h-screen xl:h-[90vh] bg-white" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/*    text  % image wrapper*/}
        <div className="flex flex-col items-center justify-center h-full xl:flex-row xl:justify-start ">
          <div className="mt-16 xl:mt-0 text-center xl:max-w-xl xl:text-left  ">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className="h1"
            >
              Explore the Fines <span className="text-accent">Global</span> Offers
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mb-10 mb-6 "
            >
              Find your ideal for any adventure with our diverse range of affordable and dependable car rentals.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image src={'/icons/buttons/google-play.svg'} alt="play" width={132} height={36} />
              </button>
              <button className="btn-cta">
                <Image src={'/icons/buttons/app-store.svg'} alt="play" width={132} height={36} />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] "
          >
            <Image src="/images/hero/car.svg" alt="car" fill style={{ objectFit: 'contain' }} priority />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          variants={fadeIn('down', 0.4)}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] w-full z-10 "
        >
          <Search />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="-mt-12 w-full  max-w-7xl mx-auto"
        >
          <Search />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
