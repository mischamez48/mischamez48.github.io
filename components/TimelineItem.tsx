'use client';
import { motion } from 'framer-motion';
import React from 'react';

export interface TimelineItemData {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  color?: string;
  idx: number;
}

export default function TimelineItem({ icon, title, subtitle, description, color = 'bg-blue-500', idx }: TimelineItemData) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="relative flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white text-sm sm:text-xl shadow ${color}`}>{icon}</div>
        <div className="w-1 h-full bg-gray-200 mt-1" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-base sm:text-lg mb-1 break-words leading-tight">{title}</div>
        {subtitle && <div className="text-xs sm:text-sm text-gray-500 mb-1 break-words leading-relaxed">{subtitle}</div>}
        {description && <div className="text-gray-700 text-xs sm:text-sm break-words leading-relaxed">{description}</div>}
      </div>
    </motion.div>
  );
} 