"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, subtotal } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = React.useState(false);

  if (!open) return null;

  const handlePay = async () => {
    setIsProcessing(true);
    
    // Simular proceso de pago
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simular pago exitoso (90% de éxito)
    const isSuccess = Math.random() > 0.1;
    
    if (isSuccess) {
      clearCart();
      onClose();
      router.push('/checkout/success');
    } else {
      onClose();
      router.push('/checkout/error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl">&times;</button>
        <h2 className="font-bold text-xl mb-4">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <div className="text-5xl mb-2">🛒</div>
            <div>No has agregado productos a tu carrito.</div>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-4 max-h-60 overflow-y-auto">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-2">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded" />
                  <div className="flex-1">
                    <div className="font-bold text-sm line-clamp-1">{item.name}</div>
                    <div className="text-[#7bb420] font-bold text-sm">S/ {item.price} x {item.quantity}</div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-xs">Eliminar</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Subtotal:</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={clearCart} 
                disabled={isProcessing}
                className="bg-gray-200 text-gray-700 rounded px-4 py-2 font-bold hover:bg-gray-300 transition w-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Vaciar carrito
              </button>
              <button 
                onClick={handlePay} 
                disabled={isProcessing}
                className="bg-[#7bb420] text-white rounded px-4 py-2 font-bold hover:bg-[#6aa11c] transition w-1/2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </>
                ) : (
                  'Ir a Pagar'
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal; 