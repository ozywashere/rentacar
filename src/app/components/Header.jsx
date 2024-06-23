'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchContext } from '../context/search';

//react scroll
import { Link } from 'react-scroll';

//components
import SearchMobile from './SearchMobile';

//media query hook
import { useMediaQuery } from 'react-responsive';

//icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';
const Header = () => {
  const { searchActive, setSearchActive } = useSearchContext();
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY >= 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    //add event listener
    window.addEventListener('scroll', handleScroll);
    //clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? 'bg-white  py-2' : 'bg-transparent shadow-none py-4'
      } fixed w-full mx-auto z-20 transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="home" spy={true} smooth={true} className="cursor-pointer ">
            <Image src="/icons/logo.svg" alt="logo" width={194} height={64} />
          </Link>
          {/* nav open menu */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
            {!nav ? (
              <BiMenuAltRight className="text-4xl cursor-pointer" />
            ) : (
              <BiX className="text-4xl cursor-pointer" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:bg-transparent xl:h-max xl:pb-0 transition-all duration-150 ease-in-out text-center xl:text-left  uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link to="home" activeClass="active" smooth={desktopMode} spy={desktopMode} className="cursor-pointer">
            Home
          </Link>
          <Link to="cars" activeClass="active" smooth={desktopMode} spy={desktopMode} className="cursor-pointer">
            Cars
          </Link>
          <Link to="about" activeClass="active" smooth={desktopMode} spy={desktopMode} className="cursor-pointer">
            About
          </Link>
          <Link to="why" activeClass="active" smooth={desktopMode} spy={desktopMode} className="cursor-pointer">
            Why us
          </Link>
          <Link
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={desktopMode}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link   activeClass="active" smooth={desktopMode} spy={desktopMode} className="cursor-pointer">
            Contact
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={desktopMode}
            className="cursor-pointer btn-primary btn-sm max-w-[164px] mx-auto xl:hidden btn"
          >
            See All Cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
