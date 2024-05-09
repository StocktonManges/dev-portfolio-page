import { Route, Routes } from "react-router-dom";
import { useNav } from "./providers/custom-hooks";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FullstackPortfolio from "./components/FullstackPortfolio";
import FrontEndPortfolio from "./components/FrontEndPortfolio";
import Experience from "./components/Experience";
import Error404 from "./components/Error404";

export default function App() {
  const { navUrls } = useNav();

  return (
    <>
      <Routes>
        <Route path={navUrls.home} element={<Header />}>
          <Route index element={<HomePage />} />
          <Route
            path={navUrls.fullstackPortfolio}
            element={<FullstackPortfolio />}
          />
          <Route
            path={navUrls.frontEndPortfolio}
            element={<FrontEndPortfolio />}
          />
          <Route path={navUrls.experience} element={<Experience />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
