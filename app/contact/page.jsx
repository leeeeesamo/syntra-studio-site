// app/contact/page.jsx
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Contact Syntra Digital Services | Start a Website or Systems Project",
  description: "Get in touch with Syntra Digital Services to discuss your website or backend system project. We’ll reply quickly with next steps and a clear recommendation."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/90" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/5" />
            </div>
          </div>

          {/* Content */}
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                  Get in Touch
                </span>
                <span className="block mt-4 text-blue-400">— Let's Start a Conversation</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Share what you're working on — we'll reply with ways Syntra can help.
              </p>
            </div>
          </div>
        </section>
        
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Free Consultation */}
          <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 sm:p-10 text-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-5">
              Free Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to launch a new website, improve your existing one, or explore digital solutions for your business?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Schedule a free, 30-minute consultation with Syntra Digital Services. We&rsquo;ll discuss your business goals, current website, project requirements, and opportunities to strengthen your online presence.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              Whether you need custom website design, a complete redesign, SEO, ongoing maintenance, or technical support, this no-obligation consultation is the perfect place to start.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Let&rsquo;s turn your ideas into a website that works for your business.
            </p>
            <a
              href="https://calendar.app.google/ksQAmHgw43DNEvyx9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </a>
            <p className="text-sm text-slate-500 mt-4">30 minutes &middot; Free &middot; No obligation</p>
          </div>

          <ContactForm />

          {/* Direct contact options */}
          <div className="max-w-3xl mx-auto mt-12 pt-10 border-t border-white/5 text-center">
            <p className="text-sm text-slate-400 mb-5">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@syntradigitalservices.com"
                className="btn-outline"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/12054736785"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-5">
              WhatsApp: (205) 473-6785
            </p>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
