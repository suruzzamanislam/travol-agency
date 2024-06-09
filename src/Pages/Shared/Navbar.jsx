import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// mobile menu icon
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/tour">Tour</NavLink>
      </li>
      <li>
        <NavLink to="/destinations">Destinations</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container flex justify-between items-center pt-5 border-b pb-2 md:pb-5 border-gray-400">
        <div className="w-40">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="md:hidden">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          <ul
            className={`absolute z-50 text-white opacity-95 bg-[#0f2454] left-0 mt-2 flex flex-col items-center origin-top gap-y-2 py-2 w-full duration-300 ${
              isOpen ? 'scale-y-100' : ' scale-y-0'
            }`}
          >
            {navItem}
          </ul>
        </div>
        <ul className="hidden md:flex  items-center gap-x-6  text-white">
          {navItem}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
