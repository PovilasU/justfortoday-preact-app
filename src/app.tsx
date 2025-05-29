// import { useState } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import "./app.css";

// export function App() {
//   return (
//     <>
//       <p class="read-the-docs">
//         Click on the Vite and Preact logos to learn more
//       </p>
//     </>
//   );
// }

// import { h } from "preact";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      {/* <Footer /> */}
    </>
  );
}
