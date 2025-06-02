import { FC, memo, useMemo } from 'react';
import ServiceItem from './ServiceItem';
import GraficoIMG from 'public/assets/IconServices/grafico.webp';
import QuadradoIMG from 'public/assets/IconServices/quadrado.webp';
import AutomacaoIMG from 'public/assets/IconServices/automacao.webp';
import MarcaIMG from 'public/assets/IconServices/marca.webp';

const services = [
  { imageSrc: GraficoIMG, title: 'Crescimento', description: 'com Performance' },
  { imageSrc: QuadradoIMG, title: 'Presença', description: 'e Tecnologia' },
  { imageSrc: AutomacaoIMG, title: 'Automação', description: 'e Eficiência' },
  { imageSrc: MarcaIMG, title: 'Marca', description: 'e Comunicação' },
] as const;

const Services: FC = () => {
  const serviceItems = useMemo(() => services.map(({ imageSrc, title, description }) => (
    <ServiceItem key={title} imageSrc={imageSrc} title={title} description={description} />
  )), []);

  return (
    <section className="bg-gradient-azul flex items-center justify-center min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-[120px] text-neutral-branco">
          Tecnologia que desbloqueia <br /> os seus limites
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-[115px] justify-items-center">
          {serviceItems}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
