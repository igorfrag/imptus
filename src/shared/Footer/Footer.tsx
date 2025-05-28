import footerItems from './footerItems';

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full p-4 text-center mt-16">
      <ul className="flex flex-wrap justify-center gap-5">
        {footerItems.map((section, index) => (
          <li key={index}>
            <ul>
              <li>
                <h2 className="text-xl mb-5">{section.title}</h2>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="opacity-80 hover:opacity-100">
                      <a href={item.link} target="_blank">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        Copyright © 2025 Imptus. Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
