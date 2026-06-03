import Link from "next/link";
import { Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-brand-blue text-white p-2 rounded-lg hover:bg-brand-red transition-colors">
            <Users size={24} />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-brand-blue">IHR</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <Link href="/" className="text-slate-600 hover:text-brand-red transition-colors">HOME</Link>
          <Link href="/about" className="text-slate-600 hover:text-brand-red transition-colors">ABOUT</Link>
          <Link href="/community" className="text-slate-600 hover:text-brand-red transition-colors">COMMUNITY</Link>
          <Link href="/hiring" className="text-slate-600 hover:text-brand-red transition-colors">HIRING SUPPORT</Link>
          <Link href="/trainings" className="text-slate-600 hover:text-brand-red transition-colors">TRAININGS</Link>
          <Link href="/events" className="text-slate-600 hover:text-brand-red transition-colors">EVENTS</Link>
          <Link href="/featured-hrs" className="text-slate-600 hover:text-brand-red transition-colors">FEATURED HRs</Link>
        </nav>
        
        <div className="hidden lg:block">
          <Link href="/contact" className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-2.5 rounded-md font-bold uppercase tracking-wider transition-colors shadow-md">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
