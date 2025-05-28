import React from 'react';

import Depoimentos from '@/shared/Depoimentos/Depoimentos';
import Hero from '@/components/Hero/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
        <Hero />
        <div>
          <Depoimentos />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
