import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[80vh] ">
        <div className=" flex flex-col gap-4 items-center justify-center text-center p-20">
          <p className="text-3xl font-bold ">Your go to URL Shortner.</p>
          <p className="text-l">
            The most straight forward URL Shortener, without any additional hassle of
            signing up.
          </p>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="bg-[var(--bg-color)] rounded-lg p-3 py-1 font-bold text-white">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-[var(--bg-color)] rounded-lg p-3 py-1 font-bold text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            alt="an Image of a vector"
            src={"/vector.png"}
            fill={true}
            className="object-contain h-100 w-100"
          />
        </div>
      </section>
    </main>
  );
}
