export default function HomePage() {
  return (
    <main>
      <section className="w-100 d-flex justify-content-center my-5">
        <div className="w-50 d-flex justify-content-between">
          <div className="w-50 pe-4">
            <img src="../assets/bridal-headshot.jpg" alt="profile" />
          </div>
          <div className="h-100 w-50 d-flex flex-column align-items-center justify-content-center">
            <div className="w-100 text-center">
              <h2 className="fs-1">About Me</h2>
              <p className="text-center fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum error vitae minima obcaecati in aspernatur similique ut
                commodi? Voluptate quos numquam consectetur quam minus. Neque
                accusamus placeat quaerat labore officiis, quos similique aut
                cumque sunt cupiditate vero nemo officia repudiandae doloremque
                quibusdam, laboriosam molestias iste itaque distinctio illo!
              </p>
              <p className="text-center fs-5">
                Natus nisi error eum vitae distinctio accusamus non repudiandae
                eos tempora nobis deserunt dolores eveniet, dicta facere
                perferendis sint odio ab? Minima, totam ab, dolorem expedita ex
                illo reiciendis sequi odit repudiandae, ipsum unde in nostrum
                obcaecati magnam ut amet dolore harum voluptatibus ad vel
                voluptatem quod! Dicta delectus porro sunt!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 d-flex flex-column align-items-center py-5">
        <div className="w-50 my-4">
          <div className="w-100">
            <img src="../assets/fullstack-stock.png" alt="fullstack" />
          </div>
        </div>

        <div className="w-50 my-4">
          <div className="w-100">
            <img src="../assets/front-end-stock.jpg" alt="front end" />
          </div>
        </div>

        <div className="w-50 my-4">
          <div className="w-100 d-flex">
            <div className="w-50">
              <img src="../assets/resume.jpg" alt="resume" />
            </div>
            <div className="w-50">
              <img src="../assets/github.png" alt="GitHub" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
