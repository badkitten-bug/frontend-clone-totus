"use client";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Icono de error */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
          <svg 
            className="h-8 w-8 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </div>

        {/* Título y mensaje */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Error en el Pago
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.
        </p>

        {/* Información adicional */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800 text-sm">
            <strong>Posibles causas:</strong>
          </p>
          <ul className="text-red-700 text-sm mt-2 text-left">
            <li>• Problemas de conexión</li>
            <li>• Datos de tarjeta incorrectos</li>
            <li>• Fondos insuficientes</li>
            <li>• Error temporal del sistema</li>
          </ul>
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
            onClick={() => router.back()}
            className="w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-colors duration-200"
          >
            Intentar Nuevamente
          </button>
        </div>

        {/* Mensaje de ayuda */}
        <p className="text-gray-500 text-sm mt-6">
          Si el problema persiste, contacta a nuestro soporte técnico.
        </p>
      </div>
    </div>
  );
} 