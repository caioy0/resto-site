import { useState } from "react";

export default function CampoDeBusca() {
  const [busca, setBusca] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
    console.log("Você digitou:", e.target.value);
  };

  return (
    <div>
      <label htmlFor="busca">Buscar:</label>
      <input
        type="text"
        id="busca"
        name="busca"
        placeholder="Inserir busca"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={busca}
        onChange={handleChange}
      />
    </div>
  );
}
