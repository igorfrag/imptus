'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex w-full justify-around items-center gap-10 py-3 px-4 relative max-md:justify-between">
        <div className="max-md:hidden">
          <Image src={'/dark.webp'} width={100} height={100} alt="Landify Logo" />
        </div>

        <button aria-label="Botão do menu" type="button" className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6"
          >
            <title>Menu</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        
        <nav className={`${showMenu ? "max-md:flex-col absolute left-0 top-16 bg-white border border-primary z-1" : "max-md:hidden"}`}>
          <ul className={`${showMenu ? "flex flex-col gap-10 py-5 px-10" : "flex gap-8 font-bold text-sm"}`}>
            <li>
              <Link aria-label="Sobre" href="#">About</Link>
            </li>
            <li>
              <Link aria-label="Produto" href="#">Product</Link>
            </li>
            <li>
              <Link aria-label="Preço" href="#">Pricing</Link>
            </li>
            <li>
              <Link aria-label="Recursos" href="#">Resources</Link>
            </li>
            <li>
              <Link aria-label="Vagas" href="#">Jobs</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-10">
          <button type="button" className="min-w-[100px] h-10 bg-primary text-white font-bold text-sm rounded-lg cursor-pointer hover:opacity-80">
            Buy now
          </button>
        </div>
			</header>
  );
};

export default Header;
