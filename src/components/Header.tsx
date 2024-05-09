import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-primary d-flex flex-column justify-content-center align-items-center py-3 text-center text-white">
        <h2>Stockton Manges Developer Portfolio</h2>
        <div className="d-flex flex-column align-items-center text-center">
          <div>( 385 ) 208 - 2732</div>
          <div>stocktonmanges@gmail.com</div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
