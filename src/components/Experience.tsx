import HomeButton from "./HomeButton";
import { useRef } from "react";
import programmingResume from "../../assets/programming-resume.pdf";
import jobResume from "../../assets/work-history-resume.pdf";

export default function Experience() {
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedInRef = useRef<HTMLAnchorElement>(null);
  const programmingResumeRef = useRef<HTMLAnchorElement>(null);
  const jobResumeRef = useRef<HTMLAnchorElement>(null);

  return (
    <section className="experience-link-wrapper container text-center d-flex flex-column align-items-center">
      <HomeButton />
      <h1 className="my-5">Experience</h1>

      <div className="row w-100 d-flex flex-wrap justify-content-center">
        <a
          ref={githubRef}
          target="_blank"
          href="https://github.com/StocktonManges"
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>GitHub</strong>
        </a>

        <a
          ref={linkedInRef}
          target="_blank"
          href="https://www.linkedin.com/in/stockton-manges-529382227/"
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>LinkedIn</strong>
        </a>
      </div>

      <div className="row w-100 d-flex flex-wrap justify-content-center">
        <a
          ref={programmingResumeRef}
          target="_blank"
          href={programmingResume}
          download={programmingResume}
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>Programming Resume</strong>
        </a>

        <a
          ref={jobResumeRef}
          target="_blank"
          href={jobResume}
          download={jobResume}
          className="col btn btn-outline-primary fs-1 border-5 d-flex justify-content-center align-items-center"
        >
          <strong>Job Resume</strong>
        </a>
      </div>
    </section>
  );
}
