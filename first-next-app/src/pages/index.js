import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../../components/layout";
import { getPosts } from "../../lib/posts";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">
        <h1>About</h1>
      </Link>
      <ul>
        {posts.map(({ title }) => {
          return <li>{title}</li>;
        })}
      </ul>
    </Layout>
  );
}
