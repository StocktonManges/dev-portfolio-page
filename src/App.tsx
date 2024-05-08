import { Route, Routes } from "react-router-dom";
import { useNav } from "./providers/custom-hooks";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FullstackPortfolio from "./components/FullstackPortfolio";
import FrontEndPortfolio from "./components/FrontEndPortfolio";
import ResumeAndGitHub from "./components/ResumeAndGitHub";

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
          <Route path={navUrls.resumeAndGitHub} element={<ResumeAndGitHub />} />
        </Route>
      </Routes>
    </>
  );
}
