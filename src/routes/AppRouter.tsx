import Router from "preact-router";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <NotFound default />
    </Router>
  );
}
