import Link from "next/link";

import { getAllPosts } from "@/lib/contentful";
import PostPreview from "./PostPreview";

export default async function Page() {
  const allPosts = await getAllPosts().then((res) => {
    return res;
  });
  return (
    <>
      <h1 className="front-title">Dernières actus</h1>
      {allPosts.map((post) => (
        <>
          <PostPreview key={post.sys.id} post={post} />
        </>
      ))}
      {/* TODO: handle pagination
      <nav className="navigation pagination" role="navigation">
        <h2 className="screen-reader-text"> </h2>
        <div className="nav-links">
          <span className="page-numbers current">1</span>
          <a
            className="page-numbers"
            href="https://www.histoiresdaux.fr/page/2/"
          >
            2
          </a>
          <a
            className="next page-numbers"
            href="https://www.histoiresdaux.fr/page/2/"
          >
            Page suivante →
          </a>
        </div>
      </nav> */}
      <hr className="clear" />
    </>
  );
}
