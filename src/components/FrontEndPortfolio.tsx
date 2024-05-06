import { frontEndPortfolio } from "../utils";

export default function FrontEndPortfolio() {
  return (
    <section>
      <h1>Front End Portfolio</h1>
      <div>
        {frontEndPortfolio.map(
          ({ title, website, techStack, shortDescription, github }) => (
            <div key={title} className="border border-primary">
              <h2>{title}</h2>
              <a href={website} target="_blank">
                Website Link
              </a>
              <div>
                <a href={github} target="_blank">
                  GitHub Repository
                </a>
              </div>
              <ul>
                {techStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{shortDescription}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
