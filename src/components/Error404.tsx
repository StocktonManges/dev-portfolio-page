import { useNav } from "../providers/custom-hooks";

export default function Error404() {
  const { navUrls } = useNav();

  return (
    <section className="error-page container text-center">
      <h1 className="mb-5">Oops! Page not found...</h1>
      <h4 className="container">
        Click <a href={navUrls.home}>here</a> to go back to the home page.
      </h4>
    </section>
  );
}
