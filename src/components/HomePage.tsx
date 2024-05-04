export default function HomePage() {
  return (
    <main>
      <section className="w-100 mw-100 d-flex justify-content-center py-5">
        <div className="w-50">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolorum error vitae minima obcaecati in aspernatur similique ut
            commodi? Voluptate quos numquam consectetur quam minus. Neque
            accusamus placeat quaerat labore officiis, quos similique aut cumque
            sunt cupiditate vero nemo officia repudiandae doloremque quibusdam,
            laboriosam molestias iste itaque distinctio illo!
          </p>
          <p className="text-center">
            Natus nisi error eum vitae distinctio accusamus non repudiandae eos
            tempora nobis deserunt dolores eveniet, dicta facere perferendis
            sint odio ab? Minima, totam ab, dolorem expedita ex illo reiciendis
            sequi odit repudiandae, ipsum unde in nostrum obcaecati magnam ut
            amet dolore harum voluptatibus ad vel voluptatem quod! Dicta
            delectus porro sunt!
          </p>
        </div>
      </section>

      <section className="w-100 d-flex flex-column align-items-center py-5">
        <div className="w-50 border border-width-3 border-primary my-2">
          <img src="../assets/fullstack-stock.png" alt="fullstack" />
        </div>

        <div className="w-50 border border-width-3 border-warning my-2">
          <img src="../assets/front-end-stock.jpg" alt="front end" />
        </div>

        <div className="w-50 border border-width-3 border-secondary my-2 d-flex">
          <div className="w-50">
            <img src="../assets/resume.jpg" alt="resume" />
          </div>
          <div className="w-50">
            <img src="../assets/github.png" alt="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}
