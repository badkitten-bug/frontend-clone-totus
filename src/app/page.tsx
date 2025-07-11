"use client";
import { useEffect, useState } from "react";
import BannerCarousel from '../components/BannerCarousel';
import OffersSection from '../components/OffersSection';
import { getFeaturedProducts, getSaleProducts, API_URL } from '../services/api';
import { useCart } from '../components/CartContext';

interface Product {
  id: number;
  attributes?: {
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
  };
}

export default function Home() {
  const [destacados, setDestacados] = useState<Product[]>([]);
  const [ofertas, setOfertas] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [destacadosData, ofertasData] = await Promise.allSettled([
          getFeaturedProducts(),
          getSaleProducts()
        ]);

        if (destacadosData.status === 'fulfilled') {
          setDestacados(destacadosData.value || []);
        } else {
          console.error('Error fetching featured products:', destacadosData.reason);
          setDestacados([]);
        }

        if (ofertasData.status === 'fulfilled') {
          setOfertas(ofertasData.value || []);
        } else {
          console.error('Error fetching sale products:', ofertasData.reason);
          setOfertas([]);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error al cargar los productos');
        setDestacados([]);
        setOfertas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7bb420] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#7bb420] text-white px-4 py-2 rounded hover:bg-[#6aa11c]"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BannerCarousel />
      <section className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-8">Destacados de la Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destacados && destacados.length > 0 ? destacados.map((prod) => {
            if (!prod?.attributes) return null;
            const imgAttr = prod?.attributes?.image?.data?.attributes;
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
                  alt={prod.attributes.name}
                  className="max-h-28 mb-4 object-contain"
                />
                <div className="font-bold text-lg mb-2">{prod.attributes.name}</div>
                <div className="text-[#7bb420] font-bold text-lg mb-2">S/ {prod.attributes.price}</div>
                <button
                  className="bg-[#7bb420] text-white font-bold rounded px-4 py-2 hover:bg-[#6aa11c] transition w-full mt-auto"
                  onClick={() => {
                    if (!prod.attributes) return;
                    addToCart({
                      id: prod.id,
                      name: prod.attributes.name,
                      price: prod.attributes.price,
                      image: imageUrl,
                      quantity: 1,
                    });
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            );
          }) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No hay productos destacados disponibles</p>
            </div>
          )}
        </div>
      </section>
      <OffersSection products={ofertas || []} />
    </div>
  );
}
