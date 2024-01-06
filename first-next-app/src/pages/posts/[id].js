import Layout from "../about";
import { getIds } from "../../../lib/posts.js";
import path from "path";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};
export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

// export default function post() {
//   return <Layout></Layout>;
// }
export function getPostById(id) {
  const postPath = path.join(postsDirPath`${id}.md`);

  const result = matter(fs.readFileSync(postPath, "utf8"));

  return {
    id,
    ...result.data,
    content: result.content,
  };
}
export default function Post({ post }) {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </Layout>
  );
}
