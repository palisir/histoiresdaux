import Link from "next/link";
import { extractExcerpt, postDateFormat } from "./utils/post";

export default function PostPreview(props: any) {
  // const postUrl = "/${props.post.fields.slug}/";
  const postUrl = `/posts/${props.post.fields.slug}/`;

  return (
    <article
      id="{props.post.fields.id}"
      className="{props.post.fields.id} post type-post status-publish format-standard hentry category-non-classe"
    >
      <header className="entry-header">
        <h2 className="entry-title">
          <Link href={postUrl} rel="bookmark">
            {props.post.fields.title}
          </Link>
        </h2>
        <span className="posted-on">
          <Link href={postUrl} rel="bookmark">
            <time
              className="entry-date published updated"
              dateTime="{props.post.fields.publishDate}"
            >
              {postDateFormat(props.post.fields.publishDate)}
            </time>
          </Link>
        </span>
        <div className="edit-post"></div>
      </header>
      <div className="post-entier">
        <div className="centre-image"></div>
        <div className="entry-content">
          {extractExcerpt(props.post.fields.content)}
          <p>
            <a className="more-link" href={postUrl}>
              Lire la suite →
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
