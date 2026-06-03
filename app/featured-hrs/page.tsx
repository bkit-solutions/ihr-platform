import { Star, Link as LinkIcon } from "lucide-react";

export default function FeaturedHrsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Featured HR Leaders</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Recognizing the top minds shaping the future of human resources in India.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden text-center hover:shadow-lg transition-shadow">
              <div className="h-32 bg-slate-200"></div>
              <div className="px-6 pb-8 -mt-12">
                <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 mb-4 shadow-sm">
                  <div className="w-full h-full bg-slate-300 rounded-full border border-slate-100"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Priya Sharma</h3>
                <p className="text-sm text-brand-red font-semibold mb-2">VP of Talent Acquisition</p>
                <p className="text-xs text-slate-500 mb-6">TechNova Solutions</p>
                
                <div className="flex justify-center gap-2">
                  <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                    <Star size={16} />
                  </button>
                  <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                    <LinkIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
