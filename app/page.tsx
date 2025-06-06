'use client';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import IconBar from '../components/IconBar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const ICONS = [
  { href: 'mailto:mischa.mez@epfl.ch', icon: FaEnvelope, label: 'Email' },
  { href: 'https://www.linkedin.com/in/mischa-mez-7944122a0', icon: FaLinkedin, label: 'LinkedIn', newTab: true },
  { href: '/portfolio/CV_angl.pdf', icon: FiFileText, label: 'Download CV', newTab: true },
  { href: 'https://github.com/', icon: FaGithub, label: 'GitHub', newTab: true },
];

export default function Page() {
  const [hovered, setHovered] = useState(-1);
  return (
    <>
      <section id="home" className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow mb-4 sm:mb-6 border-4 border-neutral-200 bg-white mx-auto">
          <img src="/portfolio/profile.png" alt="Mischa Mez" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-neutral-900">Mischa Mez</h1>
        <h2 className="text-xs sm:text-sm md:text-base font-medium text-neutral-500 mb-2">MSc Robotics @ EPFL | Neuro-X Minor</h2>
        <p className="max-w-sm sm:max-w-md md:max-w-xl mx-auto text-sm sm:text-base text-neutral-700 mb-4 sm:mb-5 leading-relaxed px-2">
          Motivated Master&apos;s student in Robotics with a Neuro-X minor at EPFL, passionate about neuroscience, biomedical imaging, and robotics engineering. Bridging technology and medicine through innovative research and hands-on engineering.
        </p>
        <IconBar />
      </section>
    </>
  );
}