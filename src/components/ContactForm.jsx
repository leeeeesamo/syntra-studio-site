export default function ContactForm() {
  return (
    <form className="space-y-6 bg-black/20 border border-[var(--syntra-border-soft)] rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm"
        />
      </div>

      <input
        type="email"
        placeholder="Email address"
        className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm"
      />

      <input
        type="text"
        placeholder="Business or role (optional)"
        className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm"
      />

      <textarea
        rows="5"
        placeholder="What would you like help with?"
        className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm"
      ></textarea>

      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center text-center"
      >
        Send Message
      </button>
    </form>
  );
}
