export default function Experience() {
  const programmingResume =
    "https://docs.google.com/document/d/1lrQ6TN8MYsMwog_cso58g7SpOatRjKN8r9Dg5W_49ms/edit?usp=sharing";
  const jobResume =
    "https://docs.google.com/document/d/1OqovXJJSsEnC7YWjROwhyCKskuTidlgzJB_hCDvvc-Y/edit?usp=sharing";

  return (
    <section className="experience-page-wrapper container text-center d-flex flex-column align-items-center">
      <h1 className="my-5">Experience</h1>

      <div className="row w-100 d-flex flex-wrap justify-content-center">
        <a
          target="_blank"
          href="https://github.com/StocktonManges"
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>GitHub</strong>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/stockton-manges-529382227/"
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>LinkedIn</strong>
        </a>
      </div>

      <div className="row w-100 d-flex flex-wrap justify-content-center">
        <a
          target="_blank"
          href={programmingResume}
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>Resume</strong>
        </a>

        <a
          target="_blank"
          href={jobResume}
          className="d-none col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>Job Resume</strong>
        </a>
      </div>
    </section>
  );
}
