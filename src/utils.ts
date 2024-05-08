import { FrontEndCardInfo, FullstackCardInfo } from "./types";

export const fullstackPortfolio = <FullstackCardInfo[]>[
  {
    title: "Chitter",
    website: "https://chitter-the-new-twitter.netlify.app",
    techStack: {
      frontEnd: ["React JS", "Typescript", "Bootstrap", "React Router Dom"],
      backend: ["Node.js", "Express", "Zod", "bcrypt"],
    },
    shortDescription:
      "Chitter is a very simple version of Twitter. You can create an account, look at posts and publish posts of your own.",
    longDescription: "This app is so friggin wonderful.",
    github: {
      frontEnd: "https://github.com/StocktonManges/chitter-frontend",
      backend: "https://github.com/StocktonManges/chitter-backend",
    },
  },
];

export const frontEndPortfolio = <FrontEndCardInfo[]>[
  {
    title: "Elevation Peaks Landing Page",
    website: "https://elevation-peaks.netlify.app/",
    techStack: ["React JS", "HTML", "CSS", "Email JS", "TypeScript"],
    shortDescription:
      "A landing page and functioning contact form for Elevation Peaks.",
    longDescription:
      "A mobile responsive, React JS webpage designed after Elevation Peaks' actual landing page. It utilizes React state for form validation and EmailJS to enable email notifications once a form is submitted.",
    github: "https://github.com/StocktonManges/elevation-peaks",
  },
  {
    title: "Harvest React Information Website",
    website: "https://hr-migey-project.netlify.app/",
    techStack: ["HTML", "CSS"],
    shortDescription:
      "A multi-page, mobile responsive website designed to help increase sales for a company offering various business proposals and partnerships.",
    longDescription:
      "A multi-page, mobile responsive website designed to help increase sales for a company offering various business proposals and partnerships.",
    github: "https://github.com/StocktonManges/harvestreact.com-migey",
  },
  {
    title: "Pup-E-Picker",
    website: null,
    techStack: ["React JS", "HTML", "CSS", "Zod", "TypeScript", "JSON Server"],
    shortDescription:
      "This is a simple app designed to display a list of dogs that can be deleted, created and favorited. ",
    longDescription: [
      "This is a simple app designed to display a list of dogs that can be deleted, created and favorited. ",
      "React state is used to filter favorited and unfavorited dogs as well as to create a control form for creating dogs.",
      "JSON server is used to simulate a backend, thus enabling HTTP requests as if data was being pulled from a live database.",
      "React Hot Toast is implemented to enhance in-app, real-time notifications.",
      "Zod and TypeScript are used to increase type safety",
    ],
    github: "https://github.com/StocktonManges/pup-e-picker-ts-context/",
  },
  {
    title: "Art Gallery Api",
    website: "https://art-gallery-api.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
    shortDescription:
      "A simple webpage where a user can favorite or unfavorite pieces of art that are pulled from the Art Institute of Chicago's REST API.",
    longDescription:
      "A simple webpage where a user can favorite or unfavorite pieces of art that are pulled from the Art Institute of Chicago's REST API.",
    github: "https://github.com/StocktonManges/art-gallery-api",
  },
  {
    title: "Name That Fish!",
    website: "https://name-that-fish.netlify.app/",
    techStack: ["HTML", "CSS", "TypeScript", "React JS"],
    shortDescription:
      "A picture of a fish is displayed and the user has to guess its type. There is a functional component version and a class component version but both function the exact same way for the user.",
    longDescription:
      "A game where a picture of a fish is displayed and the user has to guess its type. There is a functional component version and a class component version but both function the exact same way for the user.",
    github: "https://github.com/StocktonManges/name-that-fish-ts",
  },
];
