import IconBar from '../../components/IconBar';
import ProjectCard, { ProjectData } from '../../components/ProjectCard';

const projects: ProjectData[] = [
  {
    icon: '🤖',
    title: 'Humanoid Facial Robot (Robotics Project I)',
    subtitle: 'Semester 2 | Grade: 6/6 | Center for Artificial Muscles (CAM), EPFL',
    description:
      'Developed an innovative device to replicate facial expressions using dielectric elastomer actuators (DEAs), designed to assist patients with facial paralysis.',
    highlights: [
      'Real-time surface EMG signal integration',
      'Embedded control system design',
      'STM32 microcontroller programming',
      'MATLAB and Python implementation',
    ],
    outcome:
      'Successfully built and tested a functional prototype with optimized DEA specifications, demonstrating real-time actuation capabilities.',
    extra: 'Design and development of a humanoid facial robot.',
  },
  {
    icon: '🧠',
    title: 'Cognitive Neuroscience Research (Neuro-X Project II)',
    subtitle: 'Semester 3 | Grade: 5.5/6 | Center for Biomedical Imaging (CIBM), EPFL',
    description:
      'Advanced neuroimaging research using functional Magnetic Resonance Spectroscopy to study neurochemical alterations during cognitive tasks.',
    highlights: [
      'Advanced fMRS data acquisition and analysis',
      'Python-based data pipeline development',
      'Response-time analysis algorithms',
      'Glutamate quantification methodologies',
    ],
    outcome:
      'Identified significant trends in cognitive processing speed and metabolic dynamics, contributing valuable insights to biomarkers research for cognitive decline.',
    extra: 'Examining Processing Speed and Glutamate Dynamics in Cognitive Function using 1H fMRS.',
  },
  {
    icon: '👁️',
    title: 'AI-Driven Glaucoma Screening',
    subtitle: 'April 2025 | Lemanic Life Sciences Hackathon 2025',
    description:
      'Developed an AI-powered system for glaucoma screening from fundus images, demonstrating application of deep learning in ophthalmological diagnostics.',
    highlights: [],
    outcome: '',
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f8f5ee]">
      <section className="w-full max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10 text-center text-neutral-900">Major Projects</h1>
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 auto-rows-fr">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </section>
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <IconBar />
      </div>
    </main>
  );
} 