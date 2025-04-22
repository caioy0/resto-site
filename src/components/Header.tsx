import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0 mt-0">
        <div>
          <Image className="" src="/wave.svg" alt="Next.js logo" width={100} height={25} priority />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="/"
          className="text-lg font-medium text-black hover:bg-gray-200 transition duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >Menu
          </a>
          <a
            href="/about/"
            className="text-lg font-medium text-black hover:bg-gray-200 transition duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >Sobre nós
          </a>
          <a
            href="https://instagram.com"
            className="text-lg font-medium text-black hover:bg-gray-200 hover:shadow-md transition duration-300 ease-in-out px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          ><img src="insta.svg" alt="1" className="w-15 h-15 rounded-md" />
          </a>
        </div>
    </div>
  );
}
