'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AlignJustify, MessageCircle } from 'lucide-react';
import HeaderItems from './HeaderItems';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex w-full justify-around items-center gap-10 py-3 px-4 relative max-md:justify-between">
      <div>
        <Image
          src={'/assets/imptus_logo.svg'}
          width={0}
          height={0}
          className="w-[207.07px] max-md:w-full h-[68px] max-md:h-auto"
          alt="Imptus Logo"
        />
      </div>
      <nav
        className={`${showMenu ? 'max-md:w-full flex-col absolute left-0 top-16 bg-primary-azulprofundo border border-primary z-1' : 'max-md:hidden'}`}
      >
        <ul
          className={`${showMenu ? 'flex flex-col items-center gap-5 font-normal text-white py-5 px-10' : 'flex gap-15 font-normal text-xl'}`}
        >
          {HeaderItems.map((item, index) => (
            <li key={index} className="hover:opacity-80">
              <Link aria-label={item.title} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          {showMenu && (
            <li>
              <Link aria-label="contato" href="#">
                Contato
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <button
        aria-label="Botão do menu"
        type="button"
        className="md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <AlignJustify size={18} color={showMenu ? '#1babca' : '#000'} />
      </button>

      <div className="max-md:hidden">
        <Button
          size="xl"
          bgColor="primary-azulescuro"
          textColor="secondary-azulneon"
          borderColor="secondary-azulneon"
          hover
          hoverBorder="secondary-laranjaqueimado"
          hoverText="secondary-laranjaqueimado"
        >
          <MessageCircle size={16} /> Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
