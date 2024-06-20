import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AllContext } from '../../AllProvider/AllProvider';
import Hamburger from 'hamburger-react';
import logo from '../../assets/logo-dark.png';
const ScrollNav = () => {
  const { isScrollNav, scrollIsOpen, setScrollOpen } = useContext(AllContext);
  const handleIsOpen = () => {
    setScrollOpen(false);
    window.scrollTo(0, 0);
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
    <nav
      className={`shadow-lg z-50 fixed duration-300 w-full bg-white top-0 ${
        isScrollNav ? ' translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container flex justify-between items-center pt-2  pb-2 md:pb-3 ">
        <div className="w-40">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="md:hidden">
          <Hamburger
            color="black"
            toggled={scrollIsOpen}
            toggle={setScrollOpen}
          />
          <ul
            className={`absolute z-40 text-black  bg-white left-0 mt-1 flex flex-col items-center origin-top gap-y-2 py-2 w-full duration-300 ${
              scrollIsOpen ? 'scale-y-100' : ' scale-y-0'
            }`}
          >
            {navItem}
          </ul>
        </div>
        <ul className="hidden md:flex  items-center gap-x-6  text-black">
          {navItem}
        </ul>
      </div>
    </nav>
  );
};

export default ScrollNav;
