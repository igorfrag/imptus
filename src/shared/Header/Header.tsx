'use client';
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, MessageCircle } from "lucide-react"
import HeaderItems from "./HeaderItems";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-primary-azulprofundo flex w-full justify-around items-center gap-10 py-3 px-4 relative max-md:justify-between">
        <Link href="/" aria-label="Logo da Imptus" className="block w-[207px] max-[500px]:w-[72px]">
          <Image
            src="/assets/imptus_logo.svg"
            alt="Imptus Logo"
            width={207}
            height={68}
            className="w-full h-auto"
          />
        </Link>
        <nav className={`${showMenu ? "top-23 max-md:w-full flex-col absolute left-0 bg-primary-azulprofundo z-1 max-[500px]:top-12" : "max-md:hidden"}`}>
          <ul className={`${showMenu ? "flex flex-col items-center gap-5 font-normal text-neutral-cinzamedio  py-5 px-10" : "flex gap-15 font-normal text-xl text-neutral-cinzaclaro"}`}>
            {HeaderItems.map((item, index) => (
              <li key={index} className="hover:opacity-80">
                <Link aria-label={item.title} href={item.link}>{item.title}</Link>
              </li>
            ))}
            {
              showMenu && (
                <li>
                  <Link aria-label="contato" href="#">Contato</Link>
                </li>
              )
            }
          </ul>
        </nav>
        
        <button aria-label="Botão do menu" type="button" className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <AlignJustify size={18} color={showMenu ? "#FF6B35" : "#00F0FF"} />
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
