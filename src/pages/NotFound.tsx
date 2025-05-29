// export default function NotFound() {
//   return <h1>404 - Page Not Found</h1>;
// }

type NotFoundProps = {
  default?: boolean;
};

export default function NotFound(_props: NotFoundProps) {
  return <h1>404 - Page Not Found</h1>;
}
