import { createContext, useContext, useState } from "react";

const NavMenuContext = createContext(null);

export function NavMenuProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [navHeight, setNavHeight] = useState(0);

  return (
    <NavMenuContext.Provider
      value={{ activeMenu, setActiveMenu, navHeight, setNavHeight }}
    >
      {children}
    </NavMenuContext.Provider>
  );
}

export function useNavMenu() {
  const ctx = useContext(NavMenuContext);
  if (!ctx) {
    throw new Error("useNavMenu must be used inside <NavMenuProvider>");
  }
  return ctx;
}