import { GraduationCap } from "lucide-react";

export default function TrainingsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HR Trainings & Certifications</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Upskill your HR career with industry-recognized certification programs.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-red-50 text-brand-red rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Talent Acquisition Professional (CTAP)</h3>
              <p className="text-slate-600 mb-8 flex-grow">Master advanced sourcing techniques, employer branding, and interview strategies.</p>
              <button className="w-full bg-slate-100 hover:bg-slate-200 text-brand-blue font-bold py-3 rounded-lg transition-colors">
                View Curriculum
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
