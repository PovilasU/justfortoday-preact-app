import Router from "preact-router";
import { lazy, Suspense } from "preact/compat";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Help = lazy(() => import("../pages/Help"));
const Meditation = lazy(() => import("../pages/Meditation"));
const Checklist = lazy(() => import("../pages/Checklist"));
const Todo = lazy(() => import("../pages/Todo"));
const NotFound = lazy(() => import("../pages/NotFound"));

const BASE_PATH = "/justfortoday-preact-app";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Home path={`${BASE_PATH}/`} />
        <About path={`${BASE_PATH}/about`} />
        <Checklist path={`${BASE_PATH}/checklist`} />
        <Todo path={`${BASE_PATH}/todo`} />
        <Help path={`${BASE_PATH}/help`} />
        <Meditation path={`${BASE_PATH}/meditation`} />
        <NotFound default />
      </Router>
    </Suspense>
  );
}
