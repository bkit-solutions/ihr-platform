import { Building2 } from "lucide-react";

export default function HiringPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Lateral Hiring Support</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Speed up your recruitment by leveraging our PAN India HR community.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 relative z-10">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
            <div className="bg-red-50 p-4 rounded-xl text-brand-red">
              <Building2 size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Submit Hiring Requirement</h2>
              <p className="text-slate-500">For Companies & Employers</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Enter company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Person</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="Enter your name" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="company@domain.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="+91" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Requirement Details</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all resize-none" placeholder="Paste job descriptions or specific hiring needs here..."></textarea>
            </div>

            <button type="button" className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-4 rounded-lg transition-colors shadow-md text-lg">
              Submit Requirement to IHR Network
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
