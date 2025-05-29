// export default function Home() {
//   return <h1>Home Page</h1>;
// }

type HomeProps = {
  path?: string; // 👈 Required for preact-router
};

export default function Home(_props: HomeProps) {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the Just for Today Preact App! 1245</p>
    </>
  );
}
