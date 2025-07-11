import React from 'react';
import { API_URL } from '../services/api';

interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  is_on_sale?: boolean;
  image?: string | null;
}

interface OffersSectionProps {
  products: Product[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ products }) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <section className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-8 text-center">Ofertas del Momento</h2>
        <div className="text-center py-8">
          <p className="text-gray-500">No hay ofertas disponibles en este momento</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 my-10">
      <h2 className="font-bold text-2xl mb-8 text-center">Ofertas del Momento</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {products.slice(0, 4).map((prod) => {
          const imageUrl = prod.image
            ? (prod.image.startsWith('http') ? prod.image : API_URL.replace('/api', '') + prod.image)
            : "https://via.placeholder.com/200x200";
          return (
            <div key={prod.id} className="min-w-[220px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <img
                src={imageUrl}
                alt={prod.name}
                className="max-h-32 mb-3 object-contain rounded"
              />
              <div className="font-bold text-base mb-1 line-clamp-2">{prod.name}</div>
              <div className="text-[#7bb420] font-bold text-base mb-1">
                {prod.sale_price !== undefined && prod.sale_price !== null
                  ? <><span className="line-through text-gray-400 mr-2">S/ {prod.price}</span> S/ {prod.sale_price}</>
                  : <>S/ {prod.price}</>
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersSection; 