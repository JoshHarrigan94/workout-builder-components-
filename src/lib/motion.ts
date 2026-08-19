import type { Transition, Variants } from "motion/react";

/* ---------------------------------
   TRANSITIONS
---------------------------------- */

export const motionTransition = {
  tap: {
    duration: 0.11,
    ease: [0.22, 1, 0.36, 1],
  } satisfies Transition,

  ui: {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1],
  } satisfies Transition,

  editorial: {
    duration: 0.52,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,

  springSnappy: {
    type: "spring",
    stiffness: 440,
    damping: 32,
    mass: 0.7,
  } satisfies Transition,

  springSoft: {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.9,
  } satisfies Transition,

  springDrag: {
    type: "spring",
    stiffness: 520,
    damping: 34,
    mass: 0.65,
  } satisfies Transition,
};

/* ---------------------------------
   INTERACTION STATES
---------------------------------- */

export const pressMotion = {
  whileHover: {
    scale: 1.006,
  },

  whileTap: {
    scale: 0.985,
  },

  transition: motionTransition.springSnappy,
};

export const quietPressMotion = {
  whileTap: {
    scale: 0.99,
    opacity: 0.86,
  },

  transition: motionTransition.tap,
};

export const liftMotion = {
  whileHover: {
    y: -2,
  },

  whileTap: {
    y: -1,
    scale: 0.992,
  },

  transition: motionTransition.springSnappy,
};

/* ---------------------------------
   REVEALS
---------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.editorial,
  },
};

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: motionTransition.ui,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.springSoft,
  },
};

/* ---------------------------------
   STAGGER
---------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

/* ---------------------------------
   EXPAND / COLLAPSE
---------------------------------- */

export const expandCollapse = {
  closed: {
    height: 0,
    opacity: 0,
  },

  open: {
    height: "auto",
    opacity: 1,
  },
};

/* ---------------------------------
   DRAG
---------------------------------- */

export const dragLift = {
  idle: {
    scale: 1,
    y: 0,
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },

  dragging: {
    scale: 1.018,
    y: -4,
    boxShadow: "0 16px 34px rgba(0,0,0,0.18)",
    transition: motionTransition.springDrag,
  },
};

/* ---------------------------------
   PAGE TRANSITIONS
---------------------------------- */

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: motionTransition.editorial,
  },

  exit: {
    opacity: 0,
    y: -4,
    transition: motionTransition.ui,
  },
};
