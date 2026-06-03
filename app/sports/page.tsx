import { Trophy, Users } from "lucide-react";

export default function SportsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-red text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">IHR Sports League</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Building camaraderie and wellness through competitive sports events for the HR community.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-red-50 text-brand-red font-bold text-sm rounded-full mb-6 max-w-max">
                REGISTRATIONS OPEN
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">Corporate Cricket Tournament 2026</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Join 32 corporate teams in the biggest HR cricket tournament of the year. Network, play, and win the ultimate championship trophy while building strong relationships across the industry.
              </p>
              
              <ul className="space-y-4 mb-10 text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <Trophy size={16} />
                  </div>
                  Winner Prize: ₹1,00,000 + Championship Trophy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>
                  Networking dinner with industry leaders
                </li>
              </ul>
              
              <button className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg self-start">
                Register Your Team
              </button>
            </div>
            
            <div className="bg-slate-900 relative min-h-[400px] flex items-center justify-center">
              <Trophy size={120} className="text-brand-red opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
