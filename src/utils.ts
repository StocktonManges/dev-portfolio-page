import { FrontEndCardInfo, FullstackCardInfo } from "./types";

export const fullstackProjects = <FullstackCardInfo[]>[
  {
    title: "Chitter",
    website: "https://chitter-the-new-twitter.netlify.app",
    techStack: {
      frontEnd: ["React", "Typescript", "Bootstrap", "React Router Dom"],
      backend: ["Node.js", "Express", "Zod", "bcrypt"],
    },
    shortDescription: "A wonderful app",
    longDescription: "This app is so friggin wonderful.",
    github: {
      frontEnd: "https://github.com/StocktonManges/chitter-frontend",
      backend: "https://github.com/StocktonManges/chitter-backend",
    },
  },
];

export const frontEndProjects = <FrontEndCardInfo[]>[
  {
    title: "Elevation Peaks",
    website: "https://elevation-peaks-draft.netlify.app/",
    techStack: ["React", "Email JS", "TypeScript"],
    shortDescription: "A landing page and contact form.",
    longDescription: "",
    github: "https://github.com/StocktonManges/elevation-peaks",
  },
];
