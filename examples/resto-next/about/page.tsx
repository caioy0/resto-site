// src/app/about/page.tsx
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const ABOUT_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|_id, title, slug, publishedAt, _score][0...2]{title, description, _score}`;

const options = { next: { revalidate: 30 } };

export default async function AboutPage() {
  const documents = await client.fetch<SanityDocument[]>(ABOUT_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="flex flex-col gap-y-4">
        {documents.map((doc) => (
          <li key={doc._id} className="hover:underline">
            <Link href={`/${doc.slug.current}`}>
              <h2 className="text-xl font-semibold">{doc.title}</h2>
              <p className="text-gray-600">{new Date(doc.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </div>
    </main>
  );
}
