# Syntra Studio — Next.js + Tailwind Project Structure

## Folder Tree
```
SyntraStudio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx               # Home page
│   ├── about/page.jsx         # About Syntra Studio
│   ├── services/page.jsx      # Services overview
│   ├── deck/page.jsx          # Launch deck (React JSX component)
│   └── contact/page.jsx       # Contact form or CTA
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── AboutSection.jsx
│   ├── ContactForm.jsx
│   ├── SyntraStudioLaunchDeck.jsx   # Imported deck component
│   └── Button.jsx
│
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   └── brand-assets/
│
├── styles/
│   └── globals.css            # Tailwind imports
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Tailwind Setup
Install Tailwind and dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#101c57',
        brandGray: '#eef1f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

`globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  scroll-behavior: smooth;
}
```

---

## app/layout.jsx
```jsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Syntra Studio | Reliable by Design',
  description: 'Where structure meets sincerity — and business runs beautifully.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#f9fafb] to-[#eef1f7] text-[#1a1b3a] font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## app/page.jsx (Homepage)
```jsx
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
    </>
  );
}
```

---

## components/HeroSection.jsx
```jsx
export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-8">
      <h1 className="text-6xl font-bold mb-4">Reliable by Design.</h1>
      <p className="text-2xl text-gray-700 max-w-3xl">
        Where structure meets sincerity — and business runs beautifully.
      </p>
      <div className="mt-8 space-x-6">
        <a href="/services" className="bg-brandBlue text-white px-6 py-3 rounded-2xl text-lg hover:opacity-90">Explore Services</a>
        <a href="/contact" className="border-2 border-brandBlue text-brandBlue px-6 py-3 rounded-2xl text-lg hover:bg-brandBlue hover:text-white">Get in Touch</a>
      </div>
    </section>
  );
}
```

---

## components/ServicesSection.jsx
```jsx
export default function ServicesSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-lg">
        <div>
          <h3 className="font-semibold mb-2">Executive & Virtual Assistance</h3>
          <p>Professional, proactive support for founders and executives.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Customer Service Support</h3>
          <p>Reliable, empathetic communication through email, chat, and phone.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Marketing & Operations</h3>
          <p>Keep operations aligned and marketing consistent.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Web Design & Digital Presence</h3>
          <p>Modern, performance-driven websites that reflect brand purpose.</p>
        </div>
      </div>
    </section>
  );
}
```

---

## app/deck/page.jsx
```jsx
import SyntraStudioLaunchDeck from '@/components/SyntraStudioLaunchDeck';

export default function DeckPage() {
  return (
    <div className="min-h-screen">
      <SyntraStudioLaunchDeck />
    </div>
  );
}
```

---

## Deployment Notes
- Run locally: `npm run dev`
- Build for production: `npm run build && npm start`
- Deploy easily to Vercel (`vercel --prod`)

---

This structure gives you:
- SEO-friendly static + dynamic pages.
- A modular design system using React components.
- Integration-ready space for your visual Launch Deck.
- Tailwind-based styling that stays fully on-brand.

Next step → add brand colors, your logo, and optional animations (Framer Motion) for subtle movement.
