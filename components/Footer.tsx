import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            LET'S <br /> WORK <span className="text-accent">TOGETHER</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <div className="flex gap-6 text-lg font-medium">
            <Link href="https://github.com/rizkraf" target="_blank" className="hover:text-accent transition-colors">
              GITHUB
            </Link>
            <Link href="https://linkedin.com/in/rizkraf" target="_blank" className="hover:text-accent transition-colors">
              LINKEDIN
            </Link>
            <Link href="https://twitter.com/rizkraf" target="_blank" className="hover:text-accent transition-colors">
              TWITTER
            </Link>
          </div>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
