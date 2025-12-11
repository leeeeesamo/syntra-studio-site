import { motion } from 'framer-motion';

// Basic fade and slide animations
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
      type: type || 'tween', // tween, spring, inertia, just
      delay: delay || 0,
      duration: duration || 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

// Stagger container for child elements
export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

// Text animation variants
export const textVariant = (delay = 0) => ({
  hidden: {
    y: 50,
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

// Fade in up animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
};

// Fade in down animation
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
};

// Scale in animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
};

// Slide in from left
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: type || 'tween',
      delay: delay || 0,
      duration: duration || 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

// Zoom in animation
export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: delay || 0,
      duration: duration || 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

// Stagger children with custom delay
export const staggerChildren = (staggerAmount = 0.1, delayAmount = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren: delayAmount,
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
      damping: 10 
    } 
  },
});

// Tap animations
export const tapScale = (scale = 0.98) => ({
  whileTap: { 
    scale,
    transition: { 
      type: 'spring',
      stiffness: 400,
      damping: 10 
    } 
  },
});

// Export all animations as a single object
export const animations = {
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideIn,
  zoomIn,
  textVariant,
  staggerContainer,
  fadeIn,
  hoverScale,
  tapScale,
  staggerChildren,
};

export default animations;
