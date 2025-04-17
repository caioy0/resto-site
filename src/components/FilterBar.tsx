// components/FilterBar.tsx
type FiltroProps = {
    setCategoria: (categoria: string) => void;
    categoria: string;
  };
  
  export default function Filtro({ setCategoria, categoria }: FiltroProps) {
    return (
      <div className="flex justify-end mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded hover:shadow-md ${
            categoria === 'none' ? 'bg-gray-200' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('none')}
        >
          Remover Filtro
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:shadow-md ${
            categoria === 'comida' ? 'bg-gray-200 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('comida')}
        >
          Lamen
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:shadow-md ${
            categoria === 'cafe' ? 'bg-gray-200 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('cafe')}
        >
          Café
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded hover:shadow-md ${
            categoria === 'bebida' ? 'bg-gray-200 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setCategoria('bebida')}
        >
          Bebida
        </button>
      </div>
    );
  }
  