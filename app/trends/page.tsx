import { TrendingUp, Clock } from "lucide-react";

export default function TrendsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HR Trends & Insights</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Stay updated with the latest research, market analysis, and HR practices.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-slate-200 w-full relative flex items-center justify-center text-slate-400">
              <TrendingUp size={48} />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-red mb-3 tracking-wider uppercase">
                <span>Talent Acquisition</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">The Impact of AI on Recruitment in 2026</h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                Discover how artificial intelligence is streamlining the sourcing process, reducing bias, and predicting candidate success with greater accuracy than ever before.
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
                <button className="text-brand-blue hover:text-brand-blue-hover font-bold">Read More &rarr;</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
