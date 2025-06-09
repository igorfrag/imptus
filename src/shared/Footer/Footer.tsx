import footerItems from './footerItems';

const Footer = () => {
  return (
    <footer className="flex bg-gradient-azulclaro text-primary-azulprofundo  w-full sm:h-[66px] max-sm:pb-10 text-center justify-evenly align-center flex-row gap-4  max-sm:flex-col">
      <div className="self-center">
        <img src="/assets/imptus_logo.svg" alt="Imptus Logo" className="h-12 w-auto max-sm:m-2" />
      </div>
      <ul className="flex flex-row self-center justify-center max-sm:flex-col gap-6">
        <h2 className="min-sm:hidden">Links Rapidos</h2>
        {footerItems.map((section, index) => (
          <li key={index}>
            <a href={section.link} aria-label={section.title}>
              <h2 className="text-xl leading-2 gap-5  opacity-80 hover:opacity-100">
                {section.title}
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
