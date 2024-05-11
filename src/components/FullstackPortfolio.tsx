import { fullstackPortfolio } from "../utils";

export default function FullstackPortfolio() {
  return (
    <section className="fullstack-page-wrapper container d-flex flex-column align-items-center">
      <h1 className="mt-5">Fullstack Portfolio</h1>
      <div className="fullstack-card-wrapper w-md-50">
        {fullstackPortfolio.map(
          ({ title, website, techStack, shortDescription, github }) => (
            <div key={title} className="card bg-primary rounded-4 p-1 my-5">
              <h2 className="card-header p-3 text-black w-fit-content m-auto bg-primary">
                {title}
              </h2>
              <div className="card-body rounded-bottom-4 bg-white w-100 d-flex flex-column align-items-center">
                <h3>Tech Stack</h3>

                <div className="d-flex justify-content-evenly w-75 my-3 w-100">
                  <ul className="list-group">
                    <li className="list-group-item fs-5 active text-black">
                      Front End
                    </li>
                    {techStack.frontEnd.map((item) => (
                      <li className="list-group-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="list-group">
                    <li className="list-group-item active fs-5 text-black">
                      Backend
                    </li>
                    {techStack.backend.map((item) => (
                      <li className="list-group-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="w-75 text-center my-3">{shortDescription}</p>

                <div className="my-3 d-flex justify-content-center w-100 w-md-75 text-center">
                  {website && (
                    <>
                      <a
                        className="w-auto link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        href={website}
                        target="_blank"
                      >
                        Website Link
                      </a>

                      <span className="border-end border-black mx-2" />
                    </>
                  )}

                  <a
                    className="link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
                    href={github.frontEnd}
                    target="_blank"
                  >
                    Front End GitHub
                  </a>

                  <span className="border-end border-black mx-2" />

                  <a
                    className="link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
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
