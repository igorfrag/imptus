const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-sm:p-5  text-white bg-[url('/assets/heroimage.jpg')] bg-cover bg-center max-w-screen max-h-150 max-md:max-h-110 max-sm:max-h-96">
      <div className="text-center max-w-3xl ">
        <h1 className="text-7xl max-sm:text-3xl  max-md:text-5xl">
          Seu limite é nosso
          <br />
          <span className="text-secondary  font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            ponto de partida
          </span>
          <br />
        </h1>
      </div>
      <div className=" text-center">
        <p className="text-2xl max-md:text-xl max-sm:text-lg pt-5">
          Soluções reais para negócios reais.
        </p>
      </div>
    </div>
  );
};

export default Hero;
