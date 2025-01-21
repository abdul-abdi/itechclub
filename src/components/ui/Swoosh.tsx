'use client';

import { motion } from 'framer-motion';

export function Swoosh({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full transform scale-110 ${inverted ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 120 720 120C960 120 1200 80 1440 40V120H0V40Z"
            className="fill-blue-600/20"
          />
          <path
            d="M0 40C240 80 480 120 720 120C960 120 1200 80 1440 40"
            className="stroke-blue-600/50"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
} 