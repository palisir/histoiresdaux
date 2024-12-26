import { getStaticPageBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { richTextDoc } from "../utils/post";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const page = await getStaticPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{page.fields.title}</h1>
      <div className="prose max-w-none">{richTextDoc(page.fields.content)}</div>
    </main>
  );
}
