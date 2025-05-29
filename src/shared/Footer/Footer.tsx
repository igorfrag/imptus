import FooterIcon from './FooterIcon';
import footerItems from './footerItems';

const Footer = () => {
  return (
    <footer className="flex bg-primary text-white  w-full p-4 text-center justify-evenly align-center flex-row gap-4">
      <ul className="flex flex-row align-center justify-center max-md:hidden gap-6">
        {footerItems.map((section, index) => (
          <li key={index}>
            <a href={section.link} aria-label={section.title}>
              <h2 className="text-xl  opacity-80 hover:opacity-100">{section.title}</h2>
            </a>
          </li>
        ))}
      </ul>
      <div>
        <span aria-label="Copyright Imptus"> Copyright © {new Date().getFullYear()} Imptus</span>
      </div>
      <div className="flex flex-row gap-4 align-center justify-center">
        <a href="" aria-label="Github">
          <FooterIcon type="github" />
        </a>
        <a href="" aria-label="X">
          <FooterIcon type="x" />
        </a>
        <a href="" aria-label="Instagram">
          <FooterIcon type="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
