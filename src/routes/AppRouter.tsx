import Router from "preact-router";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
const BASE_PATH = "/justfortoday-preact-app";

export default function AppRouter() {
  return (
    <Router>
      {/* <Home path="/" />
      <About path="/about" /> */}
      <Home path={`${BASE_PATH}/`} />
      <About path={`${BASE_PATH}/about`} />
      <NotFound default />
    </Router>
  );
}
