// src/app/page.tsx
'use client'

import { useState } from "react";
import { menu } from "@/data/menu"
import { Card } from "@/components/Card"
import Filtro  from "@/components/FilterBar"
import SearchBar from '@/components/SearchBar'
import Image from "next/image";

export default function Home() {
  
  const palavrasChave = [
    "Cappuccino",
    "Lámen Tradicional",
    "Soda Italiana",
    "Matcha",
    "Espresso",
    "Mocha",
    "Lamen Picante"
  ];

  const [search, setSearch] = useState("")
  const [categoria, setCategoria] = useState<string>('none');

  const itensFiltrados = categoria === 'none'
  ? menu
  : menu.filter(item => item.categoria === categoria);

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0 mt-0 bg-gray-400">
        <div>
          <Image className="" src="/wave.svg" alt="Next.js logo" width={100} height={25} priority />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
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

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <label htmlFor="busca">Buscar:</label>
        <input type="text" id="1" name="inserir busca" placeholder="inserir busca"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SearchBar/>
        <div className="md:order-2">
          <Filtro setCategoria={setCategoria} categoria={categoria} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {itensFiltrados.map(item => (
          <Card
            key={item.id} 
            id={item.id} 
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
            categoria={item.categoria}  
          />
        ))}
      </div>
    </main>
  )
}
