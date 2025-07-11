import React from 'react';

const categories = [
  'Frutas',
  'Verduras',
  'Abarrotes',
  'Carnes',
  'Lácteos',
  'Panadería',
  'Pastelería',
  'Bebidas',
];

const CategoryMenu = () => {
  return (
    <nav className="bg-white py-2 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-3 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-[#7bb420] text-white font-bold rounded px-5 py-2 hover:bg-[#6aa11c] transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryMenu; 