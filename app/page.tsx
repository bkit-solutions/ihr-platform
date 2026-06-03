import { Users, Building2, UserPlus, Handshake, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 2. Hero Section */}
      <section className="bg-brand-blue text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide border border-white/20">
              India's Fastest Growing HR Community
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Your Ultimate <span className="text-brand-red">HR Networking</span> & Hiring Ecosystem
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-xl">
              A professional community of HRs, recruiters, and hiring partners helping organizations scale through networking, hiring support, events, and knowledge sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                <Users size={20} /> Join HR Community
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
                <Building2 size={20} /> Submit Hiring Requirement
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] bg-gradient-to-br from-brand-blue to-slate-900 rounded-full border border-white/10 shadow-2xl flex items-center justify-center p-12">
               <div className="grid grid-cols-2 gap-6 w-full h-full">
                  <div className="bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                      <Users size={40} className="text-brand-red mb-4" />
                      <span className="text-3xl font-black">5000+</span>
                      <span className="text-sm text-slate-300 text-center mt-2">Active HR Professionals</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                      <Building2 size={40} className="text-brand-red mb-4" />
                      <span className="text-3xl font-black">100+</span>
                      <span className="text-sm text-slate-300 text-center mt-2">Hiring Partners</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 backdrop-blur-sm col-span-2">
                      <Handshake size={40} className="text-brand-red mb-4" />
                      <span className="text-3xl font-black">PAN India</span>
                      <span className="text-sm text-slate-300 text-center mt-2">Verified Networking Ecosystem</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lateral Hiring Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue mb-4">Lateral Hiring Support</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Connecting organizations with top recruitment talent and empowering HR professionals to grow their networks.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-8">
                <Building2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">For Companies</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Share hiring requirements instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Access a PAN India HR network</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Collaborate directly with specialized recruiters</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Dramatically reduce time-to-hire</span>
                </li>
              </ul>
              <button className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Submit Requirement &rarr;
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-8">
                <UserPlus size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">For HR & Recruiters</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Participate in referral hiring programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Share and source verified resumes</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Unlock recruitment collaboration opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">Access vendor empanelment chances</span>
                </li>
              </ul>
              <button className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Join Collaboration Network &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-brand-red text-white py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Build Your HR Legacy?</h2>
          <p className="text-xl text-red-100 mb-10">Join thousands of professionals who are transforming the way hiring and networking happens in India.</p>
          <button className="bg-white text-brand-red px-10 py-4 rounded-lg font-bold text-xl hover:bg-slate-100 transition-colors shadow-lg">
            Become a Member Today
          </button>
        </div>
      </section>
    </>
  );
}
