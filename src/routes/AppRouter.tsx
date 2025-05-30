import Router from "preact-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Meditation from "../pages/Meditation";
import Checklist from "../pages/Checklist";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";
const BASE_PATH = "/justfortoday-preact-app";

export default function AppRouter() {
  return (
    <Router>
      <Home path={`${BASE_PATH}/`} />
      <About path={`${BASE_PATH}/about`} />
      <Checklist path={`${BASE_PATH}/checklist`} />
      <Todo path={`${BASE_PATH}/todo`} />
      <Help path={`${BASE_PATH}/help`} />
      <Meditation path={`${BASE_PATH}/meditation`} />
      <NotFound default />
    </Router>
  );
}
