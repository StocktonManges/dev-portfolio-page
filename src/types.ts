import { NavigateFunction } from "react-router-dom";

type NavUrls = {
  home: string;
};

export type TypeNavProvider = {
  navigate: NavigateFunction;
  navUrls: NavUrls;
};
