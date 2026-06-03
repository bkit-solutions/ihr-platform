import { Users, MessagesSquare, Award } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-brand-red text-white py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Community</h1>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto">
            Connect, Collaborate, and Grow with India's most vibrant HR professionals.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">PAN India Reach</h3>
            <p className="text-slate-600">Join professionals from over 50+ cities across India.</p>
          </div>
          
          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <MessagesSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Knowledge Hub</h3>
            <p className="text-slate-600">Engage in discussions, share case studies, and resolve HR queries.</p>
          </div>

          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Exclusive Perks</h3>
            <p className="text-slate-600">Get access to premium events, member discounts, and job referrals.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
