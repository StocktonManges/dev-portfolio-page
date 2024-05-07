import { fullstackPortfolio } from "../utils";
import HomeButton from "./HomeButton";

export default function FullstackPortfolio() {
  return (
    <section className="w-100 d-flex flex-column align-items-center">
      <HomeButton />
      <h1 className="mt-5">Fullstack Portfolio</h1>
      <div className="w-50">
        {fullstackPortfolio.map(
          ({ title, website, techStack, shortDescription, github }) => (
            <div key={title} className="card bg-primary rounded-4 p-1 my-5">
              <h2 className="card-header p-3 text-white w-fit-content m-auto">
                {title}
              </h2>
              <div className="card-body rounded-bottom-4 bg-white w-100 d-flex flex-column align-items-center">
                <h3>Tech Stack</h3>

                <div className="d-flex justify-content-evenly w-75 my-3 w-100">
                  <ul className="list-group w-25">
                    <li className="list-group-item fs-5 active">Front End</li>
                    {techStack.frontEnd.map((item) => (
                      <li className="list-group-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="list-group w-25">
                    <li className="list-group-item active fs-5">Backend</li>
                    {techStack.backend.map((item) => (
                      <li className="list-group-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="w-75 text-center my-3">{shortDescription}</p>

                <div className="my-3 d-flex justify-content-center w-100 text-center">
                  <a
                    className="w-30 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href={website}
                    target="_blank"
                  >
                    Website Link
                  </a>
                  <a
                    className="border-start border-end border-primary w-30 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href={github.frontEnd}
                    target="_blank"
                  >
                    Front End GitHub
                  </a>
                  <a
                    className="w-30 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href={github.backend}
                    target="_blank"
                  >
                    Backend GitHub
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
