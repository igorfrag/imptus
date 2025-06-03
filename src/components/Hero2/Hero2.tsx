import Button from '../Button';

const Hero2 = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-10 bg-gradient-azul text-white">
      <div className="w-full max-w-7xl text-center flex flex-col items-center">
        <h1 className="text-[82px] max-sm:text-3xl font-semibold leading-tight max-md:leading-snug">
          Somos a força que impulsiona seu crescimento, com a segurança<br />
          que você precisa.
        </h1>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <Button size="3xl">Começar agora</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
