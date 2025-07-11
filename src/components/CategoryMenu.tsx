"use client";
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

interface Category {
  id: number;
  name: string;
  description?: string;
}

const CategoryMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <nav className="bg-white py-2 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-3 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="bg-[#7bb420] text-white font-bold rounded px-5 py-2 hover:bg-[#6aa11c] transition"
            title={cat.description}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryMenu; 