// app/contact/page.jsx
import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Contact Syntra Digital | Start Your Website Project",
  description: "Get in touch to discuss a new website or redesign. Share your goals and timeline, and we'll map the next steps."
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
          <ContactForm />
        </section>
      </main>
    </PageContainer>
  );
}
