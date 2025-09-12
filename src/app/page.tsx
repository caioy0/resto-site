// src/app/page.tsx

import { menu } from "@/data/menu"
import { Card } from "@/components/Card"
import Filter  from "@/components/FilterBar"
import Header from "@/components/Header"
//import SearchBar from '@/components/SearchBar'
// import { useTranslation } from 'next-i18next'

interface HomePageProps {
  searchParams: {
    search?: string;
    category?: string;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  // const {t} = useTranslation('translation');
  const search = searchParams.search || '';
  const category = searchParams.category || 'none';

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
          <Filter category={category} search={search} /> 
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
