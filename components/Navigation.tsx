import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          RIZKY RAFI
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:underline decoration-accent underline-offset-4">
            ABOUT
          </Link>
          <Link href="#portfolio" className="hover:underline decoration-accent underline-offset-4">
            PORTFOLIO
          </Link>
          <Link href="#contact" className="hover:underline decoration-accent underline-offset-4">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
