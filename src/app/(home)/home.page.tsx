import React from 'react';
import Depoimentos from '@/components/Depoimentos/Depoimentos';
import Hero from '@/components/Hero/Hero';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import Services from '@/components/Services/Services';
import Hero2 from '@/components/Hero2/Hero2';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
        <Hero />
        <Services />
        <div>
          <Depoimentos />
        </div>
        <HowWeWork />
        <Hero2 />
      </main>
    </div>
  );
};

export default HomePage;
