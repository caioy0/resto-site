// src/components/Card.tsx
// itens cards
type CardProps = {
    id: number
    nome: string
    preco: number
    imagem: string
    categoria: string
  }
  
  export function Card({ nome, preco, imagem }: CardProps) {
    return (
      <div className="border rounded-xl p-4 bg-white shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg ">
        <img src={imagem} alt={nome} className="w-full h-48 object-cover rounded-md mb-2" />
        <h3 className="mt-2 text-lg font-medium">{nome}</h3>
        <p className="text-sm font-bold">R${preco}</p>
      </div>
    )
  }
  