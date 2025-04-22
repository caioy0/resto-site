// src/app/page.tsx
'use client'

import { useState } from "react";
import { menu } from "@/data/menu"
import { Card } from "@/components/Card"
import Filtro  from "@/components/FilterBar"
import SearchBar from '@/components/SearchBar'
import Header from "@/components/Header"

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
      <Header/>
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
            name={item.name}
            price={item.price}
            image={item.image}
            categoria={item.categoria}
            description={item.description}
          />
        ))}
      </div>
    </main>
  )
}
