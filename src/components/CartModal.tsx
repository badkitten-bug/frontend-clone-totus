"use client";
import React from 'react';
import { useCart } from './CartContext';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, subtotal } = useCart();

  if (!open) return null;

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
              <button onClick={clearCart} className="bg-gray-200 text-gray-700 rounded px-4 py-2 font-bold hover:bg-gray-300 transition w-1/2">Vaciar carrito</button>
              <button className="bg-[#7bb420] text-white rounded px-4 py-2 font-bold hover:bg-[#6aa11c] transition w-1/2">Ir a Pagar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal; 