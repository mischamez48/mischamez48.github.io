'use client';
import { motion } from 'framer-motion';
import React from 'react';

export interface ProjectData {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  outcome?: string;
  extra?: string;
}

export default function ProjectCard({ project, idx }: { project: ProjectData; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="bg-white rounded-2xl shadow-lg p-7 flex flex-col gap-3 border border-neutral-100 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{project.icon}</span>
        <h2 className="text-xl font-bold leading-tight">{project.title}</h2>
      </div>
      <div className="text-sm text-blue-700 font-medium mb-1">{project.subtitle}</div>
      {project.extra && (
        <div className="text-xs text-gray-500 italic mb-1">{project.extra}</div>
      )}
      <div className="text-gray-800 mb-2">{project.description}</div>
      {project.highlights.length > 0 && (
        <ul className="list-disc list-inside text-gray-700 mb-2">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      {project.outcome && (
        <div className="text-gray-700"><b>Outcome:</b> {project.outcome}</div>
      )}
    </motion.div>
  );
} 