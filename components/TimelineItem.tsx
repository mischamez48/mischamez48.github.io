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
      className="relative flex items-start gap-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-xl shadow ${color}`}>{icon}</div>
        <div className="w-1 h-full bg-gray-200 mt-1" />
      </div>
      <div className="flex-1">
        <div className="font-bold text-lg mb-1">{title}</div>
        {subtitle && <div className="text-sm text-gray-500 mb-1">{subtitle}</div>}
        {description && <div className="text-gray-700 text-sm">{description}</div>}
      </div>
    </motion.div>
  );
} 