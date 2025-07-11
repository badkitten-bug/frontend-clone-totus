"use client";
import React, { useState } from 'react';
import CartModal from './CartModal';
import { useCart } from './CartContext';

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-[#7bb420] py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="font-bold text-3xl text-white tracking-wide">TOTTUS</div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar alimentos..."
            className="px-3 py-2 rounded border border-gray-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-[#7bb420]"
          />
          <button className="bg-white text-[#7bb420] font-bold px-4 py-2 rounded hover:bg-gray-100 transition">Buscar</button>
        </div>
        <button
          className="relative text-white font-bold flex items-center gap-1 focus:outline-none"
          onClick={() => setCartOpen(true)}
        >
          <span className="text-xl">🛒</span>
          <span className="hidden sm:inline">Carrito</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>
        <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </header>
  );
};

export default Header; 