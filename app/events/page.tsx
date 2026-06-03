import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HR Events & Conferences</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Join our upcoming networking meetups, webinars, and national conferences.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6">
              <div className="bg-red-50 text-brand-red p-6 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
                <Calendar size={32} className="mb-2" />
                <span className="font-bold text-sm">AUG 25</span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold rounded-full mb-3">CONFERENCE</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">National HR Leadership Summit {2026}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">Join 500+ HR leaders to discuss the future of AI in recruitment and talent management in New Delhi.</p>
                <button className="text-brand-red font-bold text-sm hover:underline">View Details &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
