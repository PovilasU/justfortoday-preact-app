// import Collapse from "bootstrap/js/dist/collapse";
// import Dropdown from "bootstrap/js/dist/dropdown";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // required for data-bs-* to work
import "./styles/styles.css";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
