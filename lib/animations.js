import { motion } from 'framer-motion';

// Animation variants
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type || 'tween',
      delay: delay || 0,
      duration: duration || 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slideIn = (direction = 'left', type = 'tween', delay = 0, duration = 0.5) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

// Hover animations
export const hoverScale = (scale = 1.02) => ({
  whileHover: {
    scale,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
});

// Tap animations
export const tapScale = (scale = 0.98) => ({
  whileTap: {
    scale,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
});

// Card hover effect
export const cardHover = {
  initial: { y: 0, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Button hover effect
export const buttonHover = {
  initial: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -2,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    y: 1,
    scale: 0.98,
  },
};

// Stagger children with custom delay
export const staggerChildren = (staggerAmount = 0.1, delayAmount = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren: delayAmount,
    },
  },
});

// Viewport animation settings
export const viewport = {
  once: true,
  margin: '0px 0px -100px 0px',
  amount: 0.1,
};

// Animation presets
export const animationPresets = {
  fadeInUp: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport,
    variants: fadeInUp,
  },
  fadeInDown: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport,
    variants: fadeInDown,
  },
  scaleIn: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport,
    variants: scaleIn,
  },
};

export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideIn,
  zoomIn,
  textVariant,
  staggerContainer,
  staggerChildren,
  hoverScale,
  tapScale,
  cardHover,
  buttonHover,
  viewport,
  animationPresets,
};
