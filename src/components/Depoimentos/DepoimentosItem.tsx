import React from 'react';

type DepoimentoItemProps = {
  autor: string;
  texto: string;
};

const DepoimentoItem: React.FC<DepoimentoItemProps> = ({ autor, texto }) => {
  return (
    <div>
      <blockquote>"{texto}"</blockquote>
      <p>- {autor}</p>
    </div>
  );
};

export default DepoimentoItem;
