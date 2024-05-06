import { fullstackProjects } from "../utils";

export default function FullstackPortfolio() {
  return (
    <section>
      <h1>Fullstack Projects</h1>
      <div>
        {fullstackProjects.map(
          ({ title, website, techStack, shortDescription, github }) => (
            <div key={title} className="border border-primary">
              <h2>{title}</h2>
              <a href={website} target="_blank">
                Website Link
              </a>
              <div>
                <a href={github.frontEnd} target="_blank">
                  Front End GitHub Repository
                </a>
              </div>
              <div>
                <a href={github.backend} target="_blank">
                  Backend GitHub Repository
                </a>
              </div>
              <div className="d-flex">
                <ul>
                  {techStack.frontEnd.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul>
                  {techStack.backend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>{shortDescription}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
