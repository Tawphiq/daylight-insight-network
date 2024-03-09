import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/daylight-logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
      }
      window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-sky-500 shadow-md h-32"
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className={`${navbarBackground} p-10 sticky top-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="" className='h-10 lg:h-14' />
          </NavLink>
        </div>

        {/* Desktop Navbar */}
        <div className={`${isLargeScreen ? 'md:flex items-center space-x-14 font-semibold p-5' : 'hidden'}`}>
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/events" className="text-white hover:text-gray-300">
            Events
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/services" className="text-white hover:text-gray-300">
            Services
          </NavLink>
          <NavLink to="/recipients" className="text-white hover:text-gray-300">
            Award Receipients
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <button
            className="flex flex-col h-12 w-12  rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>

          {isOpen&&<div
            className={`${
              isOpen
                ? 'opacity-100 transition-opacity ease-in duration-300'
                : 'opacity-0 transition-opacity ease-out duration-300 pointer-events-none'
            } mt-2 transform transition-transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <NavLink to="/" className="block text-white py-2" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="block text-white py-2">
              About
            </NavLink>
            <NavLink to="/events" className="block text-white py-2">Events</NavLink>
            <NavLink to="/services" className="block text-white py-2">
              Services
            </NavLink>
            <NavLink to="/recipients" className="block text-white py-2">
              Award Receipients
            </NavLink>
            <NavLink to="/contact" className="block text-white py-2">
              Contact
            </NavLink>
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



