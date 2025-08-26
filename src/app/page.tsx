// src/app/page.tsx
'use client'

import { useState } from "react";
import { menu } from "@/data/menu"
import { Card } from "@/components/Card"
// import { useTranslation } from 'next-i18next'
import Filtro  from "@/components/FilterBar"
import SearchBar from '@/components/SearchBar'
import Header from "@/components/Header"

export default function Home() {
  // const {t} = useTranslation('translation');
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string>('none');

  const itensFiltrados = menu.filter(item => {
    const correspondeCategory = category === 'none' || item.category === category;
    const correspondeBusca = item.name.toLowerCase().includes(search.toLowerCase());
    return correspondeCategory && correspondeBusca;
  });

  return (
    <main className="p-6">
      <Header/>
      <div className="mt-8 mb-8 flex flex-wrap flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="md:order-2">
          <Filtro setCategory={setCategory} category={category} /> 
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
            category={item.category}
            description={item.description}
          />
        ))}
      </div>
    </main>
  )
}
