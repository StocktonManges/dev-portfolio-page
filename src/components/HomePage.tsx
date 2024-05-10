import { useNav } from "../providers/custom-hooks";
import profileImg from "../../assets/headshot.jpg";
import fullstackImg from "../../assets/fullstack.png";
import frontEndImg from "../../assets/front-end.jpg";
import resumeImg from "../../assets/resume.jpg";
import githubImg from "../../assets/github.svg";

export default function HomePage() {
  const { navigate, navUrls } = useNav();

  return (
    <main>
      <section className="container d-flex justify-content-center my-5">
        <div className="w-75 d-flex flex-column flex-xl-row justify-content-between align-items-center">
          <div className="profile-img w-lg-50 mw-400px pe-xl-4">
            <img src={profileImg} alt="profile" />
          </div>
          <div className="w-lg-50 text-center d-flex flex-column">
            <h2 className="fs-1 my-4 mt-xl-0">About Me</h2>
            <p className="fs-5">
              My name is Stockton Manges and I'm a dedicated fullstack
              programmer with a passion for transforming ideas into reality
              through code. I find it especially fulfilling when I'm able to
              help my team successfully reach goals that bring us closer to our
              ultimate vision. With a proven history of effective communication
              and adapting quickly to new challenges, as demonstrated by my
              resume, I'm confident I can support any team in their endeavors to
              reach and surpass the most challenging of objectives.
            </p>
            <p className="fs-5">
              I'm committed to continuous learning and believe in seizing every
              opportunity for growth. Explore my portfolio to see examples of my
              work, and feel free to reach out for collaborations or inquiries!
            </p>
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column align-items-center pb-5 ">
        <h2 className="pb-md-5 pb-4 fs-1 w-md-100 w-50 text-center text-wrap">
          Portfolio and Experience
        </h2>
        <div
          className="hover-zoom-button-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.fullstackPortfolio);
          }}
        >
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Fullstack</h1>
          </div>
          <div className="w-100">
            <img src={fullstackImg} alt="fullstack" />
          </div>
        </div>

        <div
          className="hover-zoom-button-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.frontEndPortfolio);
          }}
        >
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Front End</h1>
          </div>
          <div className="w-100">
            <img src={frontEndImg} alt="front end" />
          </div>
        </div>

        <div
          className="hover-zoom-button-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.experience);
          }}
        >
          <div className="title-overlay-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1 className="text-center">Experience</h1>
          </div>
          <div className="w-100 d-flex">
            <div className="w-50">
              <img src={resumeImg} alt="resume" />
            </div>
            <div className="w-50">
              <img src={githubImg} alt="GitHub" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
