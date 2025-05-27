import footerItems from './footerItems';

const Footer = () => {
  return (
    <footer className="bg-primary text-white m-w-full p-4 text-center">
      <ul className="flex flex-wrap justify-center gap-5">
        {footerItems.map((section, index) => (
          <li key={index}>
            <ul>
              <li>
                <h2 className="text-xl mb-5">{section.title}</h2>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <a href={item.link} key={itemIndex} target="_blank">
                      <li className="opacity-80 hover:opacity-100" key={itemIndex}>
                        {item.label}
                      </li>
                    </a>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-10">Copyright © 2025 Imptus. Todos os direitos reservados</div>
    </footer>
  );
};

export default Footer;
