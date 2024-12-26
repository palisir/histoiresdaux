import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { richTextDoc } from "@/app/utils/post";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{post.fields.title}</h1>
      <div className="prose max-w-none">{richTextDoc(post.fields.content)}</div>
    </main>
  );
}
