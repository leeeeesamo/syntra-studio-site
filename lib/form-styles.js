// Shared form styling constants used across ContactForm and website-check form.
// Update these once to keep every form on the site visually consistent.

export const formWrapperClass =
  'space-y-6 bg-black/20 border border-[var(--syntra-border-soft)] rounded-2xl p-8 shadow-lg';

export const inputClass =
  'w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm placeholder:text-slate-400';

export const statusClass = (type) =>
  `p-4 rounded-lg text-sm ${
    type === 'success'
      ? 'bg-green-500/10 border border-green-500/20 text-green-300'
      : 'bg-red-500/10 border border-red-500/20 text-red-300'
  }`;

export const submitButtonClass =
  'btn-primary w-full flex items-center justify-center text-center disabled:opacity-50 disabled:cursor-not-allowed';

export const fieldGridClass = 'grid grid-cols-1 sm:grid-cols-2 gap-4';

export const spinnerClass = 'animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2';

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqbnjal';
