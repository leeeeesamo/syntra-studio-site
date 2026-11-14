// app/contact/page.jsx
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";
import MiniHero from "@/components/MiniHero";

export const metadata = {
  title: "Contact Syntra Digital Services | Start a Website or Systems Project",
  description: "Get in touch with Syntra Digital Services to discuss your website or backend system project. We’ll reply quickly with next steps and a clear recommendation."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <MiniHero
          variant="neon-middle"
          title="Get in Touch"
          titleAccent="— Let's Start a Conversation"
          subtitle="Share what you're working on — we'll reply with ways Syntra can help."
          position="center 65%"
        />
        
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
