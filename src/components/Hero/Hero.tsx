import Button from '../Button';
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-23  max-sm:p-5 z-50 text-primary-azulprofundo  bg-hero-image max-w-screen  max-md:max-h-110 max-sm:max-h-96">
      <div className="text-center max-w-3xl ">
        <h1 className="text-7xl max-sm:text-3xl  max-md:text-5xl">
          Seu limite é nosso próximo ponto de partida
        </h1>
      </div>
      <div className=" text-center">
        <p className="text-2xl max-md:text-xl max-sm:text-lg pt-5 pb-10">
          O Impulso certo para seu negócio crescer.
        </p>
      </div>
      <Button size="3xl" hover hoverText="neutral-branco" children="Saiba mais" />
    </div>
  );
};

export default Hero;
