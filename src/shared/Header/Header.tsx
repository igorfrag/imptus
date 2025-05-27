import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center gap-10 py-8">
        <div>
          <Image src={'/next.svg'} width={100} height={100} alt="Next Logo" />
        </div>
        
				<nav>
					<ul className="flex gap-15">
						<li className="border border-primary p-2 rounded-md">
							<Link href="#">Home</Link>
						</li>
						<li className="border border-primary p-2 rounded-md">
							<Link href="#">Sobre</Link>
						</li>
						<li className="border border-secondary p-2 rounded-md">
							<Link href="#">Serviços</Link>
						</li>
            <li className="border border-primary p-2 rounded-md">
              <Link href="#">Depoimentos</Link>
            </li>
            <li className="border border-primary p-2 rounded-md">
              <Link href="#">Contato</Link>
            </li>
					</ul>
				</nav>

        <div className="flex gap-10">
          <button type="button" className="py-2 px-6 border border-secondary rounded-md">
            <Link href="#">Login</Link>
          </button>

          <button type="button" className="py-2 px-6 border border-primary p-2 rounded-md">
            <Link href="#">Cadastrar</Link>
          </button>
        </div>
			</header>
  );
};

export default Header;
