import { Outlet, useLocation } from "react-router-dom";
import { useNav } from "../providers/custom-hooks";
import { useState } from "react";
import { Collapse } from "react-bootstrap";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { navUrls } = useNav();
  const { pathname } = useLocation();

  return (
    <>
      <header className="bg-black p-3 text-center text-primary d-flex flex-column justify-content-center align-items-center position-relative">
        <button
          className="d-md-none btn btn-black position-absolute start-5px top-5px p-1 text-primary"
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
          aria-expanded={navOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <h2 className="w-80 w-md-auto">
          Stockton Manges Programming Portfolio
        </h2>
        <Collapse in={navOpen}>
          <div className="d-md-flex">
            <ul className="nav nav-pills h-0 overflow-hidden bg-black align-items-center justify-content-center flex-column flex-md-row d-md-flex">
              <li className="nav-item">
                <a
                  href={navUrls.home}
                  className={`nav-link my-1 ${
                    pathname === navUrls.home && "text-secondary"
                  }`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={navUrls.fullstackPortfolio}
                  className={`nav-link my-1 ${
                    pathname === navUrls.fullstackPortfolio && "text-secondary"
                  }`}
                >
                  Fullstack
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={navUrls.frontEndPortfolio}
                  className={`nav-link my-1 ${
                    pathname === navUrls.frontEndPortfolio && "text-secondary"
                  }`}
                >
                  Front End
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={navUrls.experience}
                  className={`nav-link my-1 ${
                    pathname === navUrls.experience && "text-secondary"
                  }`}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={navUrls.contact}
                  className={`nav-link my-1 ${
                    pathname === navUrls.contact && "text-secondary"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Collapse>
      </header>

      <Outlet />
    </>
  );
}
