// import { Link as PLink } from "preact-router";

// const Link = PLink as any;

// export default function Header() {
//   return (
//     <nav>
//       <Link href="/">Home</Link> | <Link href="/about">About</Link>
//     </nav>
//   );
// }

import { Link as PLink } from "preact-router";

const Link = PLink as any;
const BASE_PATH = "/justfortoday-preact-app";

export default function Header() {
  return (
    <nav>
      <Link href={`${BASE_PATH}/`}>Home</Link> |{" "}
      <Link href={`${BASE_PATH}/about`}>About</Link>
    </nav>
  );
}
