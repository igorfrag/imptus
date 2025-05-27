import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 flex justify-around items-center">
        <Image src={'/assets/logoipsum-362.png'} width={500} height={500} alt="Marca" />
        <h1 className="text-3xl">Imptus</h1>
      </main>
    </div>
  );
};

export default HomePage;
