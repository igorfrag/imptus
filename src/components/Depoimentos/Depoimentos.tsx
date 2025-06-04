'use client';

import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';

interface Depoimento {
  nome: string;
  cargo: string;
  titulo: string;
  texto: string;
  imagem: string;
}

const DEPOIMENTOS_DATA: Depoimento[] = [
  {
    nome: 'Renata Lemos',
    cargo: 'CEO da Arvo Pet Store',
    titulo: '“O impulso que precisávamos veio deles.”',
    texto:
      'A parceria com a Imptus foi um divisor de águas. Nosso faturamento triplicou em três meses com o novo funil automatizado que eles criaram. Além disso, finalmente temos clareza sobre nossos dados e métricas. Hoje, cada decisão que tomamos é estratégica.',
    imagem: '/arsene_lupin.webp',
  },
  {
    nome: 'Diego Marques',
    cargo: 'Funcionario IMPTUS',
    titulo: '“Lorem”',
    texto:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nulla natus odit vel quisquam dolores quas impedit, dicta ducimus soluta illo ipsa, quod eos quis fugit! Dolorum qui nulla ullam.',
    imagem: '/arsene_lupin.webp',
  },
  {
    nome: 'Diego Marques',
    cargo: 'Funcionario IMPTUS',
    titulo: '“Lorem”',
    texto:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nulla natus odit vel quisquam dolores quas impedit, dicta ducimus soluta illo ipsa, quod eos quis fugit! Dolorum qui nulla ullam.',
    imagem: '/arsene_lupin.webp',
  },
  {
    nome: 'Diego Marques',
    cargo: 'Funcionario IMPTUS',
    titulo: '“Lorem”',
    texto:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nulla natus odit vel quisquam dolores quas impedit, dicta ducimus soluta illo ipsa, quod eos quis fugit! Dolorum qui nulla ullam.',
    imagem: '/arsene_lupin.webp',
  },
];

const DepoimentoCard = ({ nome, cargo, titulo, texto, imagem }: Depoimento) => (
  <article className="flex flex-col items-center gap-3 w-[90vw] max-w-[380px] flex-shrink-0 md:w-[380px]">
    <section
      className="relative flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-4 shadow-lg"
      style={{ height: 160 }}
    >
      <h3 className="text-md --font-barlow-semi-condensed text-black text-center">{titulo}</h3>
      <p
        className="text-xs text-gray-600 flex-grow overflow-auto text-center --font-barlow"
        style={{ maxHeight: 90 }}
      >
        {texto}
      </p>
      <div className="absolute bottom-[-8px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white shadow-md" />
    </section>
    <footer className="mt-1 flex items-center gap-2 text-xs text-white">
      <div className="relative h-6 w-6">
        <Image
          src={imagem}
          alt={`Foto de ${nome}`}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <p className="font-semibold">{nome},</p>
        <p>{cargo}</p>
      </div>
    </footer>
  </article>
);

const useItemsPerSlide = (): number => {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsPerSlide;
};

const Depoimentos = () => {
  const itemsPerSlide = useItemsPerSlide();
  const totalSlides = useMemo(
    () => Math.ceil(DEPOIMENTOS_DATA.length / itemsPerSlide),
    [DEPOIMENTOS_DATA.length, itemsPerSlide],
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

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
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;

      const distance = touchStartX.current - e.changedTouches[0].clientX;
      if (distance > 50) nextSlide();
      else if (distance < -50) prevSlide();

      touchStartX.current = null;
    },
    [nextSlide, prevSlide],
  );

  return (
    <section
      id="depoimentos"
      className="relative mb-padding w-full overflow-hidden py-24 text-white"
      style={{ backgroundImage: 'var(--background-gradient-azul)' }}
      aria-live="polite"
    >
      <header className="px-4 pb-12 text-center">
        <h2 className="mb-4 text-[64px] leading-[76px] text-center font-semibold --font-barlow-semi-condensed">
          Depoimentos
        </h2>
        <p className="mx-auto max-w-2xl text-lg">
          Nosso sucesso está diretamente ligado ao sucesso dos nossos clientes.
        </p>
        <p className="mx-auto max-w-2xl text-lg">
          e nossa identidade reflete{' '}
          <strong className="text-[var(--color-secondary-laranjaqueimado)]">
            seriedade, humanidade, inovação e força estrutural
          </strong>
          .
        </p>
      </header>

      <button onClick={prevSlide} />

      <button onClick={nextSlide} />

      <main className="container mx-auto px-6">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center gap-16 py-8 md:flex-row">
                  {DEPOIMENTOS_DATA.slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide,
                  ).map((dep, index) => (
                    <DepoimentoCard key={slideIndex * itemsPerSlide + index} {...dep} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <nav
        className="absolute bottom-[106px] left-1/2 flex h-[10px] -translate-x-1/2 flex-row items-center justify-center gap-3 p-0"
        aria-label="Navegação dos depoimentos"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 hover:scale-110 focus:outline-none ${
              index === currentSlide
                ? 'h-1.5 w-1.5 bg-[var(--color-neutral-branco)]'
                : 'h-1.5 w-1.5 border border-[var(--color-neutral-cinzamedio)] bg-transparent'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
            type="button"
          />
        ))}
      </nav>
    </section>
  );
};

export default Depoimentos;
