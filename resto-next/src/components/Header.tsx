// resto-next/src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";

// Query para pegar os dados do header e transformar a referência da imagem em URL
const HEADER_QUERY = `*[_type == "header"][0]{
  title,
  "logoUrl": logo.asset->url,
  navLinks,
  instagramUrl
}`;

const options = { next: { revalidate: 30 } };

export default async function Header() {
  const data = await client.fetch(HEADER_QUERY, {}, options);

  if (!data) return null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0 mt-0 mb-10">
      <div>
        {data.logoUrl ? (
          <Image 
            src={data.logoUrl} 
            alt={data.title} 
            width={100} 
            height={25} 
            priority 
          />
        ) : (
          <span className="font-bold">{data.title}</span>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        {data.navLinks?.map((link: any, index: number) => (
          <Link
            key={index}
            href={link.href}
            className="text-lg font-medium text-black hover:bg-gray-200 transition duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >
            {link.label}
          </Link>
        ))}

        {data.instagramUrl && (
          <a
            href={data.instagramUrl}
            className="text-lg font-medium text-black hover:bg-gray-200 hover:shadow-md transition duration-300 ease-in-out px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Mantendo o seu SVG local para o ícone do Insta */}
            <img src="/insta.svg" alt="Instagram" className="w-6 h-6 rounded-md" />
          </a>
        )}
      </div>
    </div>
  );
}