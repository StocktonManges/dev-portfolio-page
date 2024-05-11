import { ReactNode } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { NavContext } from "./custom-hooks";

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const navigateTo = (to: string, options?: NavigateOptions | undefined) => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate(to, options);
  };

  const navUrls = {
    home: "/",
    fullstackPortfolio: "/portfolio/fullstack",
    frontEndPortfolio: "/portfolio/front-end",
    experience: "/experience",
    contact: "/contact",
  };

  return (
    <NavContext.Provider
      value={{
        navigateTo,
        navUrls,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
