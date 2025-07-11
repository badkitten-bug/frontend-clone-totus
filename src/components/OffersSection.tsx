import React from 'react';
import { API_URL } from '../services/api';

interface Product {
  id: number;
  attributes?: {
    name: string;
    price: number;
    image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

interface OffersSectionProps {
  products: Product[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ products }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 my-10">
      <h2 className="font-bold text-2xl mb-8 text-center">Ofertas del Momento</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {products.slice(0, 4).map((prod) => {
          if (!prod?.attributes) return null;
          const imageUrl =
            prod?.attributes?.image?.data?.attributes?.url
              ? API_URL.replace("/api", "") + prod.attributes.image.data.attributes.url
              : "https://via.placeholder.com/200x200";
          return (
            <div key={prod.id} className="min-w-[220px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <img
                src={imageUrl}
                alt={prod.attributes.name}
                className="max-h-32 mb-3 object-contain rounded"
              />
              <div className="font-bold text-base mb-1 line-clamp-2">{prod.attributes.name}</div>
              <div className="text-[#7bb420] font-bold text-base mb-1">S/ {prod.attributes.price}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersSection; 