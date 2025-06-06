'use client';
import { FaCode, FaBrain, FaRobot, FaStethoscope, FaHeartPulse, FaBookOpen } from 'react-icons/fa6';
import { FaRunning, FaGlobeEurope } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function AboutCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg p-8 mb-8 flex flex-col items-center"
    >
      <img
        src="/profile.png"
        alt="Mischa Mez"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white -mt-16 mb-4 object-cover bg-white"
      />
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About Me</h1>
      <p className="text-lg text-slate-700 mb-8 text-center">
        <span className="text-3xl mr-2 align-middle">👋</span>Hi! I&apos;m Mischa Mez, a passionate Master&apos;s student in Robotics at EPFL with a strong interdisciplinary background in neuroscience, biomedical imaging, and AI. I thrive at the intersection of technology and healthcare, and I&apos;m driven by the desire to create impactful solutions for real-world medical challenges. My studies and projects have given me hands-on experience in neuroengineering, signal processing, and robotics, and I am eager to contribute my skills to advance healthcare innovation.
      </p>
      <div className="w-full flex flex-col gap-6">
        <div className="py-5 px-4 rounded-xl bg-white/80 shadow-sm border border-slate-200 mb-2">
          <h2 className="text-xl font-semibold mb-6 text-slate-700 flex items-center gap-2">
            <MdScience className="inline text-purple-500 text-2xl sm:text-3xl md:text-4xl" /> Technical Skills
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-3 min-w-[170px]">
                <FaCode className="text-blue-500 text-4xl" />
                <span className="font-bold">Programming:</span>
              </span>
              <span className="text-slate-600">Python, MATLAB, C++, STM32</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-3 min-w-[170px]">
                <FaBrain className="text-pink-500 text-4xl" />
                <span className="font-bold">AI & ML:</span>
              </span>
              <span className="text-slate-600">PyTorch, Deep Learning, Applied ML</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-3 min-w-[170px]">
                <FaStethoscope className="text-green-600 text-4xl" />
                <span className="font-bold">Biomedical:</span>
              </span>
              <span className="text-slate-600">Neural signal processing, fMRS, EMG, Imaging</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-3 min-w-[170px]">
                <FaRobot className="text-yellow-500 text-4xl" />
                <span className="font-bold">Robotics:</span>
              </span>
              <span className="text-slate-600">Model Predictive Control, Aerial & Legged Robots</span>
            </div>
          </div>
        </div>
        <div className="py-5 px-4 rounded-xl bg-white/80 shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 text-slate-700">Interests & Values</h2>
          <ul className="flex flex-col gap-4 text-slate-600 pl-2">
            <li className="flex items-center gap-3 text-lg">
              <FaHeartPulse className="text-red-500 text-2xl sm:text-3xl md:text-4xl" />
              Healthcare innovation and technology for good
            </li>
            <li className="flex items-center gap-3 text-lg">
              <FaRunning className="text-orange-500 text-2xl sm:text-3xl md:text-4xl" />
              <FaBookOpen className="text-indigo-500 text-2xl sm:text-3xl md:text-4xl" />
              <FaGlobeEurope className="text-green-700 text-2xl sm:text-3xl md:text-4xl" />
              Running, reading, and exploring new cultures
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
} 