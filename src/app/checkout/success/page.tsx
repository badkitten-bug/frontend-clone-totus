"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const router = useRouter();

  // Limpiar el carrito al llegar a esta página
  useEffect(() => {
    // Limpiar el carrito del localStorage si existe
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Icono de éxito */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg 
            className="h-8 w-8 text-green-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Título y mensaje */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ¡Pago Exitoso!
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Tu pedido ha sido procesado correctamente. Recibirás un correo de confirmación pronto.
        </p>

        {/* Información adicional */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <p className="text-green-800 text-sm">
            <strong>Número de pedido:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-green-800 text-sm mt-1">
            <strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <button
            onClick={() => router.push("/")}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Volver a la Tienda
          </button>
          
          <button
            onClick={() => router.push("/productos")}
            className="w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-colors duration-200"
          >
            Seguir Comprando
          </button>
        </div>

        {/* Mensaje de agradecimiento */}
        <p className="text-gray-500 text-sm mt-6">
          ¡Gracias por elegirnos! Esperamos verte pronto.
        </p>
      </div>
    </div>
  );
} 