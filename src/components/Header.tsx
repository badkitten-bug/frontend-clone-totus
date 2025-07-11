import React from 'react';

const Header = () => {
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
        <div className="text-white font-bold cursor-pointer flex items-center gap-1">
          <span className="text-xl">🛒</span> <span className="hidden sm:inline">Carrito</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 