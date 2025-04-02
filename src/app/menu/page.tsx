// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao Meu Café ☕</h1>
      <p className="text-lg text-gray-600 mt-4">Explore nosso cardápio e aproveite!</p>

      <Link href="/menu">
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Ver Cardápio 🍽️
        </button>
      </Link>
    </main>
  );
}
