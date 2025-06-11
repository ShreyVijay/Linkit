import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" h-16 flex justify-between px-5 items-center">
      <div className="flex items-center logo font-bold text-3xl">
        <Image
          alt="an Image of a vector"
          src="/vector.png"
          width={28}
          height={28}
          priority
          style={{ width: 'auto', height: '28px' }}
          className="mr-2"
        />
        <Link href="/">Linkit</Link>
      </div>
      {/* rest of your navbar code */}
      <ul className="flex justify-center gap-5 items-center">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-[var(--bg-color)] rounded-lg shadow-lg p-3 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-[var(--bg-color)] rounded-lg shadow-lg p-3 py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;