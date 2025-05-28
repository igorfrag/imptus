const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white bg-[url('/assets/heroimage.jpg')] bg-cover bg-center max-w-screen max-h-150">
      <div className="text-center max-w-3xl ">
        <h1 className="text-7xl ">
          Seu limite é nosso
          <br />
          <span className="text-secondary font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            ponto de partida
          </span>
          <br />
        </h1>
      </div>
      <div>
        <p className="text-2xl pt-5">Soluções reais para negócios reais.</p>
      </div>
    </div>
  );
};

export default Hero;
 