import React from 'react';

const Sobre: React.FC = () => {
  const buttonClasses = "inline-block border-2 border-white text-black font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-[#13365E] transition-all duration-300 shadow-lg hover:shadow-xl";
  const containerClasses = "max-w-5xl mx-auto text-center";
  const gradientClasses = "bg-gradient-to-b from-[#13365E] via-blue-300 to-white";

  return (
    <section className={`${gradientClasses} py-20 px-6 md:px-12`}>
      <div className={containerClasses}>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          IMPTUS <br className="hidden md:block"/> IMPTUS
        </h2>
        
        <p className="text-lg md:text-xl text-black-100 leading-relaxed mb-10 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        
        <a href="#" className={buttonClasses}>
          Saiba Mais
        </a>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" />
      </div>
    </section>
  );
};

export default Sobre;