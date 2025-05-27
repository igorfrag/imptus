import React from 'react';
import Image from 'next/image';

type DepoimentoCardProps = {
  nome: string;
  texto: string;
  imagem?: string;
};

const DepoimentoCard: React.FC<DepoimentoCardProps> = ({ nome, texto, imagem }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm hover:scale-105 transition-transform">
      {imagem && (
        <div className="w-24 h-24 mx-auto mb-4">
          <Image
            src={imagem}
            alt={`Foto de ${nome}`}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>
      )}
      <p className="text-gray-700 italic mb-4">"{texto}"</p>
      <h3 className="text-gray-900 font-semibold text-lg text-center">{nome}</h3>
    </div>
  );
};

export default DepoimentoCard;
