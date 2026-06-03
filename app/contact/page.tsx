import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-brand-blue text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Get in touch with the IHR team for partnerships, support, or general inquiries.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Let's start a conversation</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-4 rounded-xl text-brand-red shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                <p className="text-slate-600 mt-2 leading-relaxed">123 Business Hub, Connaught Place,<br/>New Delhi, India 110001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-4 rounded-xl text-brand-red shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Phone Support</h4>
                <p className="text-slate-600 mt-2">+91 98765 43210<br/><span className="text-sm text-slate-400">Mon-Fri, 9AM-6PM</span></p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-4 rounded-xl text-brand-red shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                <p className="text-slate-600 mt-2">contact@ihrplatform.com<br/>partnerships@ihrplatform.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-bold py-4 rounded-lg transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
