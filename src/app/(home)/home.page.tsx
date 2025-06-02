import React from 'react';
import Depoimentos from '@/components/Depoimentos/Depoimentos';
import Hero from '@/components/Hero/Hero';
import HowWeWork from '@/components/HowWork/HowWeWork';
import Services from '@/components/Services/Services';
import Sobre from '@/components/Sobre/Sobre';


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
        <Hero />
        <Services/>
        <Sobre />
        <div>
          <Depoimentos />
        </div>

        <HowWeWork />
      </main>
    </div>
  );
};

export default HomePage;
