import { NavigateFunction } from "react-router-dom";

export type Page = "fullstack" | "front-end" | "resume-and-github";

export type FullstackCardInfo = {
  title: string;
  website: string | undefined;
  techStack: {
    frontEnd: string[];
    backend: string[];
  };
  shortDescription: string;
  longDescription: string | string[];
  github: {
    frontEnd: string;
    backend: string;
  };
};

export type FrontEndCardInfo = {
  title: string;
  website: string | undefined;
  techStack: string[];
  shortDescription: string;
  longDescription: string | string[];
  github: string;
};

type NavUrls = {
  home: string;
  fullstackPortfolio: string;
  frontEndPortfolio: string;
  experience: string;
};

export type TypeNavProvider = {
  navigate: NavigateFunction;
  navUrls: NavUrls;
};
