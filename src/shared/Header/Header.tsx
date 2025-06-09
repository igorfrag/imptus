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
    <header className="bg-gradient-azulclaro flex w-full justify-around items-center gap-10 py-3 px-4 fixed max-md:justify-between z-50">
      <Link href="/" aria-label="Logo da Imptus" className="block w-[207px] max-[500px]:w-[72px]">
        <Image
          src="/assets/imptus_logo.svg"
          alt="Imptus Logo"
          width={207}
          height={68}
          className="w-full h-auto"
        />
      </Link>
      <nav
        className={`${showMenu ? 'top-23 max-md:w-full flex-col absolute left-0 bg-gradient-azulclaro z-100 max-[500px]:top-12' : 'max-md:hidden'}`}
      >
        <ul
          className={`${showMenu ? 'flex flex-col items-center gap-5 font-normal text-primary-azulprofundo  py-5 px-10' : 'flex gap-15 font-normal text-xl text-primary-azulprofundo'}`}
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
        <AlignJustify size={18} color={showMenu ? '#FF6B35' : '#00F0FF'} />
      </button>

      <div className="max-md:hidden">
        <a href="/contato">
          <Button
            size="xl"
            bgColor="primary-azulescuro"
            textColor="secondary-laranjaqueimado"
            borderColor="secondary-laranjaqueimado"
            hover
            hoverBorder="secondary-azulneon"
            hoverText="secondary-azulneon"
          >
            <MessageCircle size={16} /> Contato
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
