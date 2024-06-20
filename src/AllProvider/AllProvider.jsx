import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AllContext = createContext(null);

const AllProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [scrollIsOpen, setScrollOpen] = useState(false);
  const [isScrollNav, setScrollNav] = useState(false);
  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setScrollNav(true);
      setOpen(false);
    } else {
      setScrollNav(false);
      setScrollOpen(false);
    }
  });
  const ContextInfo = {
    isOpen,
    setOpen,
    isScrollNav,
    setScrollNav,
    scrollIsOpen,
    setScrollOpen,
    handleBackTop,
  };
  return (
    <AllContext.Provider value={ContextInfo}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
AllProvider.propTypes = {
  children: PropTypes.node,
};
