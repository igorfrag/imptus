import React from 'react';
import Sobre from '@/components/Sobre/Sobre';

import Depoimentos from '@/shared/Depoimentos/Depoimentos';
import Hero from '@/components/Hero/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
        <Hero />
        <Sobre />
        <div>
          <Depoimentos />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
