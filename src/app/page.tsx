"use client";
import { useEffect, useState } from "react";
import BannerCarousel from '../components/BannerCarousel';
import OffersSection from '../components/OffersSection';
import { getFeaturedProducts, getSaleProducts, API_URL } from '../services/api';
import { useCart } from '../components/CartContext';
import Loader from '../components/Loader';

interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  is_on_sale?: boolean;
  image?: {
    data?: {
      attributes?: {
        url: string;
        formats?: {
          medium?: { url: string };
          small?: { url: string };
          thumbnail?: { url: string };
        };
      };
    };
  };
}

export default function Home() {
  const [destacados, setDestacados] = useState<Product[]>([]);
  const [ofertas, setOfertas] = useState<Product[]>([]);
  const [loadingDestacados, setLoadingDestacados] = useState(true);
  const [loadingOfertas, setLoadingOfertas] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoadingDestacados(true);
    setLoadingOfertas(true);
    getFeaturedProducts().then((data) => {
      setDestacados(data);
      setLoadingDestacados(false);
    });
    getSaleProducts().then((data) => {
      setOfertas(data);
      setLoadingOfertas(false);
    });
  }, []);

  return (
    <div>
      <BannerCarousel />
      <section className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-8">Destacados de la Semana</h2>
        {loadingDestacados ? (
          <Loader />
        ) : destacados.length === 0 ? (
          <div className="text-center text-gray-500 py-10">No hay productos destacados.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {destacados.map((prod) => {
              const imgAttr = prod?.image?.data?.attributes;
              const imageUrl =
                imgAttr?.formats?.medium?.url
                  ? API_URL.replace("/api", "") + imgAttr.formats.medium.url
                  : imgAttr?.url
                  ? API_URL.replace("/api", "") + imgAttr.url
                  : "https://via.placeholder.com/150";
              return (
                <div key={prod.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
                  <img
                    src={imageUrl}
                    alt={prod.name}
                    className="max-h-28 mb-4 object-contain"
                  />
                  <div className="font-bold text-lg mb-2">{prod.name}</div>
                  <div className="text-[#7bb420] font-bold text-lg mb-2">S/ {prod.price}</div>
                  <button
                    className="bg-[#7bb420] text-white font-bold rounded px-4 py-2 hover:bg-[#6aa11c] transition w-full mt-auto"
                    onClick={() => {
                      addToCart({
                        id: prod.id,
                        name: prod.name,
                        price: prod.price,
                        image: imageUrl,
                        quantity: 1,
                      });
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <OffersSection products={ofertas} loading={loadingOfertas} />
    </div>
  );
}
