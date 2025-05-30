// import { render } from "preact";
// // import './index.css'
// import Collapse from "bootstrap/js/dist/collapse";
// import Dropdown from "bootstrap/js/dist/dropdown";
// //import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Makes collapse work

// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./app.tsx";

// render(<App />, document.getElementById("app")!);

import { render } from "preact";
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app.tsx";

render(<App />, document.getElementById("app")!);

// Example: initialize collapse and dropdown manually if needed (simple global init)
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((el) => {
  new Collapse(el as HTMLElement);
});

document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
  new Dropdown(el as HTMLElement);
});
