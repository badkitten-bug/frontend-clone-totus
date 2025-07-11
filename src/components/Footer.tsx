import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto text-center text-sm px-4">
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline text-[#7bb420]">Términos y condiciones</a>
          <a href="#" className="hover:underline text-[#7bb420]">Política de cookies</a>
          <a href="#" className="hover:underline text-[#7bb420]">Política de privacidad</a>
        </div>
        <div className="opacity-70">
          © TODOS LOS DERECHOS RESERVADOS<br />
          Av. Angamos Este N° 1805 Piso 10, Surquillo, Lima, Perú.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 