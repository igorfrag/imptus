'use client';

import Image from 'next/image';
import ChatItem from './ChatItem';

export default function Chat() {
  const items = [
    {
      src: '/assets/IconChat/1.webp',
      alt: 'Icone lampada',
      text: 'Atendimento humano e estratégico',
    },
    {
      src: '/assets/IconChat/2.webp',
      alt: 'Icone engrenagem',
      text: 'Soluções personalizadas pra cada etapa',
    },
    {
      src: '/assets/IconChat/3.webp',
      alt: 'Icone escala',
      text: 'Foco real em crescimento e escala',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen max-sm:p-5 text-white bg-hero-image max-w-screen max-h-150 max-md:max-h-110 max-sm:max-h-96">
      <div className="w-full max-w-6xl p-8 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1 font-barlow text-[25px] leading-[30px] max-w-[480px]">
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="mb-8">
            Descubra como podemos transformar seu negócio com{' '}
            <span className="text-[var(--color-secondary-laranjaqueimado)]">
              tecnologia e estratégia
            </span>.
          </p>
          <ul className="space-y-4">
            {items.map(({ src, alt, text }, index) => (
              <li key={index}>
                <div className="flex items-center gap-3">
                  <Image
                    src={src}
                    alt={alt}
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px]"
                    priority
                  />
                  <p className="w-[300px] whitespace-pre-line">{text}</p>
                </div>
                <div className="mt-2 w-full">
                  <Image
                    src="/assets/IconChat/line.webp"
                    alt="Linha divisória"
                    width={500}
                    height={2}
                    className="w-full h-[2px]"
                    priority
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-end max-w-[496px] w-full">
          <ChatItem />
        </div>
      </div>
    </section>
  );
}
