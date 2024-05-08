import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "./custom-hooks";

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const navUrls = {
    home: "/",
    fullstackPortfolio: "/portfolio/fullstack",
    frontEndPortfolio: "/portfolio/front-end",
    resumeAndGitHub: "/resume-and-github",
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
