import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

export default async function Page() {
  const client = createClient();

  const page = await client.getByUID("single_page", "a-propos");

  return (
    <article id={page.uid} className="page-template-default">
      <header className="entry-header">
        <h1 className="entry-title">{page.data.title}</h1>
      </header>
      <div className="entry-content">
        <PrismicRichText field={page.data.content} />
      </div>
    </article>
  );
}
