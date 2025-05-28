import FooterIcon from './FooterIcon';
import footerItems from './footerItems';

const Footer = () => {
  return (
    <footer className="flex bg-primary text-white w-full p-4 text-center justify-evenly align-center flex-row gap-4">
      <ul className="flex flex-row  gap-5 align-center justify-center">
        {footerItems.map((section, index) => (
          <li key={index}>
            <a href={section.link}>
              <h2 className="text-xl  opacity-80 hover:opacity-100">{section.title}</h2>
            </a>
          </li>
        ))}
      </ul>
      <div>
        <span> Copyright © 2025 Imptus. Todos os direitos reservados</span>
      </div>
      <div className="flex flex-row gap-4 align-center justify-center">
        <a href="">
          <FooterIcon type="github" />
        </a>
        <a href="">
          <FooterIcon type="x" />
        </a>
        <a href="">
          <FooterIcon type="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
