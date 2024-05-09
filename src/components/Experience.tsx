import HomeButton from "./HomeButton";
import { useRef } from "react";
import programmingResume from "../../assets/programming-resume.pdf";
import workHistoryResume from "../../assets/work-history-resume.pdf";

export default function Experience() {
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedInRef = useRef<HTMLAnchorElement>(null);
  const programmingResumeRef = useRef<HTMLAnchorElement>(null);
  const workHistoryResumeRef = useRef<HTMLAnchorElement>(null);

  return (
    <section className="container text-center">
      <HomeButton />
      <h1 className="mt-5">Experience</h1>

      <div className="row">
        <div
          className="hover-zoom-button-wrapper col overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            githubRef.current?.click();
          }}
        >
          <a
            ref={githubRef}
            target="_blank"
            href="https://github.com/StocktonManges"
            className="d-none"
          ></a>
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>GitHub</h1>
          </div>
          <div className="w-100">
            <img src="../assets/github.svg" alt="GitHub" />
          </div>
        </div>

        <div
          className="hover-zoom-button-wrapper col overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            linkedInRef.current?.click();
          }}
        >
          <a
            ref={linkedInRef}
            target="_blank"
            href="https://www.linkedin.com/in/stockton-manges-529382227/"
            className="d-none"
          ></a>
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>LinkedIn</h1>
          </div>
          <div className="w-100">
            <img src="../assets/github.svg" alt="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="hover-zoom-button-wrapper col overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            programmingResumeRef.current?.click();
          }}
        >
          <a
            ref={programmingResumeRef}
            target="_blank"
            href={programmingResume}
            download={programmingResume}
            className="d-none"
          ></a>
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Programming Resume</h1>
          </div>
          <div className="w-100">
            <img src="../assets/github.svg" alt="GitHub" />
          </div>
        </div>

        <div
          className="hover-zoom-button-wrapper col overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            workHistoryResumeRef.current?.click();
          }}
        >
          <a
            ref={workHistoryResumeRef}
            target="_blank"
            href={workHistoryResume}
            download={workHistoryResume}
            className="d-none"
          ></a>
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Work History Resume</h1>
          </div>
          <div className="w-100">
            <img src="../assets/github.svg" alt="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}
