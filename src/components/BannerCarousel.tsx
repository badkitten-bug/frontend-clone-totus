import React, { useState } from 'react';

const banners = [
  {
    img: 'https://i.imgur.com/0y8Ftya.png',
    alt: '25% dscto. en chocolatería',
    button: 'VER TODO',
  },
  {
    img: 'https://i.imgur.com/8Q1Qw1B.png',
    alt: 'Feliz Día Mamá',
    button: 'VER TODO',
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % banners.length);
  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);

  return (
    <div className="relative bg-gray-100 min-h-[320px] flex items-center justify-center overflow-hidden">
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#7bb420] transition z-10">&lt;</button>
      <div className="text-center w-full flex flex-col items-center">
        <img src={banners[current].img} alt={banners[current].alt} className="max-h-64 w-auto rounded-xl mx-auto shadow-lg" />
        <div className="mt-4">
          <button className="bg-[#7bb420] text-white font-bold rounded px-8 py-3 text-lg hover:bg-[#6aa11c] transition">
            {banners[current].button}
          </button>
        </div>
      </div>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#7bb420] transition z-10">&gt;</button>
    </div>
  );
};

export default BannerCarousel; 