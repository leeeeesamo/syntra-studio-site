import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, scaleIn, staggerContainer } from './animations';

// ========================
// Utility Functions
// ========================

/**
 * Combines multiple class names and merges Tailwind classes
 * @param {...any} inputs - Class names to merge
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Truncates text to a specified length and adds an ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} - Truncated text
 */
export function truncate(text, length = 100) {
  if (!text) return '';
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

/**
 * Converts a string to URL-friendly slug
 * @param {string} str - String to convert
 * @returns {string} - URL-friendly slug
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit the rate of function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Copies text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Whether the copy was successful
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

/**
 * Formats a date to a readable string
 * @param {Date|string|number} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Date(date).toLocaleDateString(undefined, defaultOptions);
}

/**
 * Generates a random ID
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, length + 2);
}

/**
 * Checks if the current device is a mobile device
 * @returns {boolean} - Whether the device is mobile
 */
export function isMobile() {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Scrolls to an element with smooth behavior
 * @param {string} selector - CSS selector of the element to scroll to
 * @param {object} options - Scroll options
 */
export function scrollToElement(selector, options = {}) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options,
    });
  }
}

/**
 * Formats a number as a currency string
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (e.g., 'USD', 'EUR')
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ========================
// UI Components
// ========================

/**
 * Section Wrapper Component
 * Provides consistent spacing and layout for page sections
 */
export const Section = ({
  id,
  children,
  className = '',
  containerClass = '',
  withContainer = true,
  ...props
}) => {
  const sectionClasses = cn(
    'relative py-20 md:py-24 lg:py-32 overflow-hidden',
    className
  );

  const containerClasses = cn(
    'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    containerClass
  );

  return (
    <section id={id} className={sectionClasses} {...props}>
      {withContainer ? (
        <div className={containerClasses}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

/**
 * Section Header Component
 * Standardized section headers with optional description
 */
export const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  titleClass = '',
  subtitleClass = '',
  descriptionClass = '',
  ...props
}) => {
  const containerClasses = cn(
    {
      'text-center': align === 'center',
      'text-left': align === 'left',
      'text-right': align === 'right',
      'max-w-3xl mx-auto': align === 'center',
      'max-w-2xl': align !== 'center',
    },
    'mb-12',
    className
  );

  return (
    <div className={containerClasses} {...props}>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'text-sm font-medium text-emerald-400 mb-3',
            subtitleClass
          )}
        >
          {subtitle}
        </motion.p>
      )}
      {title && (
        <motion.h2
          variants={fadeInUp}
          className={cn(
            'text-3xl md:text-4xl font-bold tracking-tight text-white',
            'bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100/90',
            'mb-4',
            titleClass
          )}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn('text-lg text-slate-400', descriptionClass)}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

/**
 * Card Component
 * Reusable card with hover effects and consistent styling
 */
export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        'relative rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50',
        'transition-all duration-300',
        hoverEffect &&
          'hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Button Component
 * Standardized button with variants and sizes
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-emerald-500/20',
    secondary:
      'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    outline:
      'bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/50',
    link: 'bg-transparent text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        'relative overflow-hidden',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center bg-inherit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.span>
      )}
      <span className={cn('flex items-center', { 'opacity-0': loading })}>
        {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
      </span>
    </button>
  );
};

// Export all utilities and components
export default {
  // Utility functions
  cn,
  formatNumber,
  truncate,
  slugify,
  debounce,
  throttle,
  copyToClipboard,
  formatDate,
  generateId,
  isMobile,
  scrollToElement,
  formatCurrency,

  // UI Components
  Section,
  SectionHeader,
  Card,
  Button,
};
