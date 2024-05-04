import { Route, Routes } from "react-router-dom";
import { useNav } from "./providers/custom-hooks";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./css/styles.css";

export default function App() {
  const { navUrls } = useNav();
  return (
    <>
      <Routes>
        <Route path={navUrls.home} element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
