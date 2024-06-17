import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// mobile menu icon
import { Fade as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { AllContext } from '../../AllProvider/AllProvider';
const Navbar = () => {
  const { isOpen, setOpen } = useContext(AllContext);
  const handleIsOpen = () => {
    setOpen(false);
  };
  const navItem = (
    <>
      <li>
        <NavLink onClick={handleIsOpen} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/tour">
          Tour
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/destinations">
          Destinations
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/gallery">
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleIsOpen} to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="container flex justify-between items-center pt-5 border-b pb-2 md:pb-5 border-gray-400">
        <div className="w-40">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="md:hidden">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          <ul
            className={`absolute z-40 text-white  bg-[#0f2454] left-0 mt-2 flex flex-col items-center origin-top gap-y-2 py-2 w-full duration-300 ${
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
