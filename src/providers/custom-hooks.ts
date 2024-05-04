import { createContext, useContext } from "react";
import { TypeNavProvider } from "../types";

export const NavContext = createContext<TypeNavProvider>({} as TypeNavProvider);
export const useNav = () => useContext(NavContext);
