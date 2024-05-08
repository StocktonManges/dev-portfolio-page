import { useNav } from "../providers/custom-hooks";

export default function HomePage() {
  const { navigate, navUrls } = useNav();

  return (
    <main>
      <section className="container d-flex justify-content-center my-5">
        <div className="w-75 d-flex flex-column flex-xl-row justify-content-between align-items-center">
          <div className="profile-img w-lg-50 mw-400px pe-xl-4">
            <img src="../assets/bridal-headshot.jpg" alt="profile" />
          </div>
          <div className="w-lg-50 text-center d-flex flex-column">
            <h2 className="fs-1 my-4 mt-xl-0">About Me</h2>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolorum error vitae minima obcaecati in aspernatur similique ut
              commodi? Voluptate quos numquam consectetur quam minus. Neque
              accusamus placeat quaerat labore officiis, quos similique aut
              cumque sunt cupiditate vero nemo officia repudiandae doloremque
              quibusdam, laboriosam molestias iste itaque distinctio illo!
            </p>
            <p className="fs-5">
              Natus nisi error eum vitae distinctio accusamus non repudiandae
              eos tempora nobis deserunt dolores eveniet, dicta facere
              perferendis sint odio ab? Minima, totam ab, dolorem expedita ex
              illo reiciendis sequi odit repudiandae, ipsum unde in nostrum
              obcaecati magnam ut amet dolore harum voluptatibus ad vel
              voluptatem quod! Dicta delectus porro sunt!
            </p>
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column align-items-center py-5">
        <h2 className="pb-5 fs-1">Portfolio and Experience</h2>
        <div
          className="page-type-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.fullstackPortfolio);
          }}
        >
          <div className="page-type-title-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Fullstack</h1>
          </div>
          <div className="w-100">
            <img src="../assets/fullstack.png" alt="fullstack" />
          </div>
        </div>

        <div
          className="page-type-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.frontEndPortfolio);
          }}
        >
          <div className="page-type-title-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1>Front End</h1>
          </div>
          <div className="w-100">
            <img src="../assets/front-end.jpg" alt="front end" />
          </div>
        </div>

        <div
          className="page-type-wrapper overflow-hidden w-75 my-4 position-relative"
          onClick={() => {
            navigate(navUrls.resumeAndGitHub);
          }}
        >
          <div className="page-type-title-wrapper position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1 className="text-center">Resume and GitHub</h1>
          </div>
          <div className="w-100 d-flex">
            <div className="w-50">
              <img src="../assets/resume.jpg" alt="resume" />
            </div>
            <div className="w-50">
              <img src="../assets/github.svg" alt="GitHub" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
