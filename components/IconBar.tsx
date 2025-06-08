'use client';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { useState } from 'react';

const ICONS = [
  { href: 'mailto:mischa.mez@epfl.ch', icon: FaEnvelope, label: 'Email' },
  { href: 'https://www.linkedin.com/in/mischa-mez-7944122a0', icon: FaLinkedin, label: 'LinkedIn', newTab: true },
  { href: '/CV_angl.pdf', icon: FiFileText, label: 'Download CV', newTab: true },
  { href: 'https://github.com/mischamez48', icon: FaGithub, label: 'GitHub', newTab: true },
];

export default function IconBar() {
  const [hovered, setHovered] = useState(-1);
  return (
    <div className="flex justify-center gap-12 text-3xl mt-4 mb-0">
      {ICONS.map(({ href, icon: Icon, label, newTab }, i) => (
        <div key={label} className="relative flex flex-col items-center group">
          <a
            href={href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            className="transition-transform duration-200 hover:scale-125 hover:text-neutral-700 focus:outline-none"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            aria-label={label}
          >
            <Icon />
          </a>
          <span
            className={
              `absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-neutral-900 text-white text-xs font-medium shadow z-10 whitespace-nowrap
              transition-all duration-200
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              ${hovered === i ? 'opacity-100 pointer-events-auto translate-y-0' : ''}`
            }
            style={{ minWidth: 'max-content' }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
} 