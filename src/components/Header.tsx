// import { Link } from "preact-router";

// export default function Header() {
//   return (
//     <nav>
//       <Link href="/">Home</Link> | <Link href="/about">About</Link>
//     </nav>
//   );
// }

// import { Link } from "preact-router";

// export default function Header() {
//   return (
//     <nav>
//       <Link href="/">Home</Link> | <Link href="/about">About</Link>
//     </nav>
//   );
// }

import { Link as PLink } from "preact-router";

const Link = PLink as any;

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  );
}
