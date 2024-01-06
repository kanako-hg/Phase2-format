// import Link from "next/link";
// import Layout from "../../components/layout";

// const About = () => {
//   return (
//     <Layout pageTitle="About">
//       <h1>About</h1>
//       <Link href="/">
//         <h1>My Blog</h1>
//       </Link>
//     </Layout>
//   );
// };

// export default About;

// export default function Home() {
//   return <h1>About</h1>;
// }

import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <title>My blog | {pageTitle}</title>
      </Head>
      <h1>My Blog</h1>
      {children}
    </div>
  );
}
