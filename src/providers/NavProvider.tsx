import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "./custom-hooks";

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const navUrls = {
    home: "/",
  };

  return (
    <NavContext.Provider
      value={{
        navigate,
        navUrls,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};