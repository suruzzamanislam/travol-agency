import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AllContext = createContext(null);

const AllProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const ContextInfo = {
    isOpen,
    setOpen,
  };
  return (
    <AllContext.Provider value={ContextInfo}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
AllProvider.propTypes = {
  children: PropTypes.node,
};
