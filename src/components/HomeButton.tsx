import { useNav } from "../providers/custom-hooks";

export default function HomeButton() {
  const { navigate, navUrls } = useNav();
  return (
    <>
      <button
        className="home-button btn btn-primary border border-white border-3 rounded-circle"
        onClick={() => {
          navigate(navUrls.home);
        }}
      >
        Home
      </button>
    </>
  );
}
