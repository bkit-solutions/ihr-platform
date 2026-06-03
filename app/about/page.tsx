import { Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">About IHR Community</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Building India's largest and most connected HR networking ecosystem.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-50 text-brand-red rounded-xl flex items-center justify-center mb-8">
            <Target size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            To empower HR professionals, recruiters, and companies by providing a centralized platform for networking, lateral hiring collaboration, and continuous professional development.
          </p>
        </div>
        
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-8">
            <Eye size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            To be recognized globally as India’s premier HR network, fostering an ecosystem where hiring is accelerated through trust, collaboration, and a unified community effort.
          </p>
        </div>
      </section>
    </div>
  );
}
