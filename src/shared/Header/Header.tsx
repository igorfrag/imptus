import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center gap-10 py-3 px-4">
        <div>
          <Image src={'/dark.png'} width={100} height={100} alt="Landify Logo" />
        </div>
        
				<nav>
					<ul className="flex gap-8 font-bold text-sm">
						<li>
							<Link href="#">About</Link>
						</li>
						<li>
							<Link href="#">Product</Link>
						</li>
						<li>
							<Link href="#">Pricing</Link>
						</li>
            <li>
              <Link href="#">Resources</Link>
            </li>
            <li>
              <Link href="#">Jobs</Link>
            </li>
					</ul>
				</nav>

        <div className="flex gap-10">
          <button type="button" className="min-w-[100px] h-10 bg-landingPageButton text-white font-bold text-sm rounded-lg cursor-pointer">
            Buy now
          </button>
        </div>
			</header>
  );
};

export default Header;
