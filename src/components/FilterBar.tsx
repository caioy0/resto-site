// components/FilterBar.tsx
type FiltroProps = {
    setCategoria: (categoria: string) => void;
    categoria: string;
  };
  
  export default function Filtro({ setCategoria, categoria }: FiltroProps) {
    return (
      <div className="flex justify-end mb-4 font-bold">
        <button
          className={`mx-2 px-4 py-2 rounded hover:bg-gray-200 ${
            categoria === 'none' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('none')}
        >
          Remover Filtro
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:bg-gray-200 ${
            categoria === 'lamen' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('lamen')}
        >
          Lamen
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:bg-gray-200 ${
            categoria === 'cafe' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('cafe')}
        >
          Café
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:bg-gray-200 ${
            categoria === 'bebida' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('bebida')}
        >
          Bebida
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:bg-gray-200 ${
            categoria === 'coreana' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('coreana')}
        >
          Comida Coreana
        </button>
      </div>
    );
  }
  