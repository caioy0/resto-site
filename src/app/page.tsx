// src/app/page.tsx
'use client'

import { useState } from "react";
import { menu } from "../data/menu"
import { Card } from "../components/Card"
import Filtro  from "../components/FilterBar"

export default function Home() {
  
  const [categoria, setCategoria] = useState<string>('none');

  const itensFiltrados = categoria === 'none'
  ? menu
  : menu.filter(item => item.categoria === categoria);
  
  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-6 mt-6">
        <a href="/about/page"
          className="text-lg font-medium text-black hover:text-blue-400 transition duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >Sobre nós
        </a>
        <a
          href="https://instagram.com"
          className="text-lg font-medium text-black hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out px-4 py-2 rounded-md"
        >Instagram
        </a>
      </div>


      <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <label htmlFor=""></label>
        <input type="text" id="1" name="inserir busca" placeholder="inserir busca"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
