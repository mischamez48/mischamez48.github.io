'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export interface ProjectData {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  outcome?: string;
  extra?: string;
}

// Component to render either emoji or custom icon
function ProjectIcon({ icon }: { icon: string }) {
  const [imageError, setImageError] = useState(false);
  const [imagePaths] = useState([
    '/portfolio/lung.png',
    '/lung.png',
    './lung.png',
    'lung.png'
  ]);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  
  // Debug log to see what icon value we're receiving
  console.log('ProjectIcon received icon:', icon, 'type:', typeof icon);
  
  // Check if the icon is the lungs icon
  if (icon === 'lungs') {
    console.log('Rendering lungs icon');
    
    const handleImageError = () => {
      console.error('Image failed to load at path:', imagePaths[currentPathIndex]);
      if (currentPathIndex < imagePaths.length - 1) {
        setCurrentPathIndex(currentPathIndex + 1);
      } else {
        setImageError(true);
      }
    };
    
    if (imageError) {
      // Fallback to text/emoji if all image paths fail
      return (
        <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center bg-red-100 rounded border-2 border-red-200">
          <span className="text-xs text-red-600 font-bold">🫁</span>
        </div>
      );
    }
    
    return (
      <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded border">
        <img
          src={imagePaths[currentPathIndex]}
          alt="Lungs icon"
          width={28}
          height={28}
          className="w-full h-full object-contain"
          onLoad={() => console.log('Lung image loaded successfully from:', imagePaths[currentPathIndex])}
          onError={handleImageError}
        />
      </div>
    );
  }
  
  // Debug for other icons
  console.log('Rendering emoji icon:', icon);
  
  // Otherwise, render as emoji
  return <span className="text-2xl sm:text-3xl flex-shrink-0">{icon}</span>;
}

export default function ProjectCard({ project, idx }: { project: ProjectData; idx: number }) {
  // Debug log to see the project data
  console.log('ProjectCard rendering:', project.title, 'with icon:', project.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-7 flex flex-col gap-2 sm:gap-3 border border-neutral-100 hover:shadow-2xl transition-shadow duration-300 w-full max-w-none"
    >
      <div className="flex items-start gap-3 mb-2">
        <ProjectIcon icon={project.icon} />
        <h2 className="text-lg sm:text-xl font-bold leading-tight break-words">{project.title}</h2>
      </div>
      <div className="text-xs sm:text-sm text-blue-700 font-medium mb-1 break-words">{project.subtitle}</div>
      {project.extra && (
        <div className="text-xs text-gray-500 italic mb-1 break-words">{project.extra}</div>
      )}
      <div className="text-sm sm:text-base text-gray-800 mb-2 break-words leading-relaxed">{project.description}</div>
      {project.highlights.length > 0 && (
        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 mb-2 space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="break-words leading-relaxed">{h}</li>
          ))}
        </ul>
      )}
      {project.outcome && (
        <div className="text-xs sm:text-sm text-gray-700 break-words leading-relaxed"><b>Outcome:</b> {project.outcome}</div>
      )}
    </motion.div>
  );
} 