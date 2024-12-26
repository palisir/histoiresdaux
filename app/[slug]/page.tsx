import { getStaticPageBySlug } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
// import { getStaticPageBySlug, getAllStaticPages } from "../../lib/contentful";
// import type { StaticPage } from '@/types/contentful';

// export async function generateStaticParams() {
//   const pages = await getAllStaticPages();

//   return pages.map((page: any) => ({
//     slug: page.fields.slug,
//   }));
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = await params.slug;
  const page = await getStaticPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{page.fields.title}</h1>
      <div className="prose max-w-none">
        {documentToReactComponents(page.fields.content)}
        {/* {page.fields.content} */}
      </div>
    </main>
  );
}
