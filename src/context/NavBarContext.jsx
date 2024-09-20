import { createContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavBarContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContext;