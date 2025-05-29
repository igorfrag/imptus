'use client';

import React, { useState, useEffect, useCallback, useRef, memo } from 'react';

const DepoimentoCard = memo(
  ({
    nome,

    texto,

    imagem,
  }: {
    nome: string;

    texto: string;

    imagem: string;
  }) => {
    return (
      <div className="w-full max-w-sm group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02]">
        <div
          className="relative h-48 rounded-t-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl"
          style={{
            background:
              'linear-gradient(150deg, var(--color-primary) 15%, var(--color-accent) 100%, var(--color-secondary) 100%)',
          }}
        >
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg relative z-10">
            <img
              src={imagem || '/placeholder.svg'}
              alt={nome}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-b-2xl p-6 text-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-all duration-300 group-hover:text-gray-900">
            {nome}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-700">
            {texto}
          </p>

          <button
            className="px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
            style={{ backgroundColor: 'var(--color-primary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            }}
          >
            Ver Mais
          </button>
        </div>
      </div>
    );
  },
);

DepoimentoCard.displayName = 'DepoimentoCard';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/arsene_lupin.webp?height=120&width=120',
    },

    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/placeholder.svg?height=120&width=120',
    },

    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/placeholder.svg?height=120&width=120',
    },

    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/placeholder.svg?height=120&width=120',
    },

    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/placeholder.svg?height=120&width=120',
    },

    {
      nome: 'null',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagem: '/placeholder.svg?height=120&width=120',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const touchEndX = useRef<number | null>(null);

  const itemsPerSlide = isMobile ? 1 : 3;

  const totalSlides = Math.ceil(depoimentos.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;

      if (touchStartX.current !== null) {
        const distance = touchStartX.current - e.changedTouches[0].clientX;

        if (distance > 50) {
          nextSlide();
        } else if (distance < -50) {
          prevSlide();
        }
      }

      touchStartX.current = null;

      touchEndX.current = null;
    },
    [nextSlide, prevSlide],
  );

  const startIndex = currentSlide * itemsPerSlide;

  return (
    <section className="relative py-24 mb-24 w-full overflow-hidden">
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-gray-600 border-b-[8px] border-b-transparent"></div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-600 border-b-[8px] border-b-transparent"></div>
          </button>
        </>
      )}

      <div className="container mx-auto px-12">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex justify-center items-stretch gap-8 max-w-6xl mx-auto px-8 py-8">
                  {depoimentos

                    .slice(
                      slideIndex * itemsPerSlide,

                      (slideIndex + 1) * itemsPerSlide,
                    )

                    .map((dep, index) => (
                      <DepoimentoCard
                        key={`depoimento-${slideIndex * itemsPerSlide + index}`}
                        nome={dep.nome}
                        texto={dep.texto}
                        imagem={dep.imagem}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
              index === currentSlide ? '' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            style={index === currentSlide ? { backgroundColor: 'var(--color-primary)' } : {}}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
