import { frontEndPortfolio } from "../utils";
import HomeButton from "./HomeButton";

export default function FullstackPortfolio() {
  return (
    <section className="container d-flex flex-column align-items-center mb-5">
      <HomeButton />
      <h1 className="mt-5">Front End Portfolio</h1>
      <div className="front-end-card-wrapper w-md-50">
        {frontEndPortfolio.map(
          ({ title, website, techStack, shortDescription, github }) => (
            <div
              key={title}
              className="card bg-primary rounded-4 p-1 my-5 text-center"
            >
              <h2 className="card-header p-3 text-white w-fit-content m-auto">
                {title}
              </h2>
              <div className="card-body rounded-bottom-4 bg-white w-100 d-flex flex-column align-items-center">
                <ul className="list-group w-sm-50 w-md-25 text-center">
                  <li className="list-group-item fs-5 active">Tech Stack</li>
                  {techStack.map((item) => (
                    <li className="list-group-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="w-75 text-center my-3">{shortDescription}</p>

                <div className="my-3 d-flex justify-content-center w-100 text-center">
                  {website && (
                    <>
                      <a
                        className={`w-auto link-underline link-underline-opacity-0 link-underline-opacity-100-hover`}
                        href={website}
                        target="_blank"
                      >
                        Website
                      </a>
                      <span className="border-end border-primary mx-2" />
                    </>
                  )}
                  <a
                    className="w-auto link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href={github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
