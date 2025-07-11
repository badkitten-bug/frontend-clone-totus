"use client";
import { useEffect, useState } from "react";
import BannerCarousel from '../components/BannerCarousel';
import { getProducts, API_URL } from '../services/api';

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

export default function Home() {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProductos);
  }, []);

  return (
    <div>
      <BannerCarousel />
      <section className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-8">Destacados de la Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productos.map((prod) => {
            if (!prod?.attributes) return null;
            const imageUrl =
              prod?.attributes?.image?.data?.attributes?.url
                ? API_URL.replace("/api", "") + prod.attributes.image.data.attributes.url
                : "https://via.placeholder.com/150";
            return (
              <div key={prod.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
                <img
                  src={imageUrl}
                  alt={prod.attributes.name}
                  className="max-h-28 mb-4 object-contain"
                />
                <div className="font-bold text-lg mb-2">{prod.attributes.name}</div>
                <div className="text-[#7bb420] font-bold text-lg mb-2">S/ {prod.attributes.price}</div>
                <button className="bg-[#7bb420] text-white font-bold rounded px-4 py-2 hover:bg-[#6aa11c] transition w-full mt-auto">
                  Agregar al carrito
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
