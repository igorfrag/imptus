import React from 'react';

import Depoimentos from '@/shared/Depoimentos/Depoimentos';
import Hero from '@/components/Hero/Hero';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Hero />
      <main className="flex-1 flex justify-around items-center"></main>
      <Depoimentos />
    </div>
  );
};

export default HomePage;
