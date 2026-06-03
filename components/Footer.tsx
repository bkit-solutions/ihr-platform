import Link from "next/link";
import { Users, MapPin, Phone, Mail, Link as LinkIcon, Camera, Hash } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-slate-300 py-16 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white text-brand-blue p-2 rounded-lg">
              <Users size={20} />
            </div>
            <span className="font-black text-2xl text-white">IHR</span>
          </div>
          <p className="text-sm mb-6">India's leading HR networking and hiring ecosystem, connecting professionals to opportunities.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"><LinkIcon size={18} className="text-white" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"><Camera size={18} className="text-white" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"><Hash size={18} className="text-white" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/community" className="hover:text-white transition-colors">Community Guidelines</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/hiring" className="hover:text-white transition-colors">Lateral Hiring</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">HR Events & Conferences</Link></li>
            <li><Link href="/trainings" className="hover:text-white transition-colors">Corporate Training</Link></li>
            <li><Link href="/sports" className="hover:text-white transition-colors">HR Sports League</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span>123 Business Hub, Connaught Place, New Delhi 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>contact@ihrplatform.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Indian Human Resource Council. All rights reserved.</p>
      </div>
    </footer>
  );
}
