import IconBar from '../../components/IconBar';
import ProjectCard, { ProjectData } from '../../components/ProjectCard';

const semesterProjects: ProjectData[] = [
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
];

const personalProjects: ProjectData[] = [
  {
    icon: '👁️',
    title: 'AI-Driven Glaucoma Screening',
    subtitle: 'April 2025 | Lemanic Life Sciences Hackathon 2025',
    description:
      'Developed an AI-powered system for glaucoma screening from fundus images, demonstrating application of deep learning in ophthalmological diagnostics. *Project details limited due to NDA requirements.',
    highlights: [
      'Deep learning for medical image analysis',
      'Ophthalmological diagnostic systems',
      'Fundus image processing',
      'Healthcare AI applications',
    ],
    outcome: 'Successfully implemented AI-powered glaucoma screening system with promising diagnostic accuracy.',
    extra: 'Confidential project - details limited by non-disclosure agreement.',
  },
];

const mentionableProjects: ProjectData[] = [
  {
    icon: 'lungs',
    title: 'Dielectric Elastomer Actuator for Respiratory Assistance',
    subtitle: 'EPFL | Translational neuroengineering - NX-423',
    description:
      'Advanced respiratory assistance system for ALS patients using dielectric elastomer actuators, combining biomedical engineering with innovative actuation technology.',
    highlights: [
      'MATLAB strain vs voltage analysis',
      'Displacement matrix calculations',
      'Biomedical device design for ALS patients',
      'Comprehensive technical documentation',
    ],
    outcome:
      'Developed functional DEA-based respiratory assistance prototype with detailed performance analysis and technical documentation.',
    extra: 'Innovative approach to respiratory assistance using smart materials.',
  },
  {
    icon: '🍫',
    title: 'Chocolate Recognition Project',
    subtitle: 'EPFL | Image analysis and pattern recognition - EE-451',
    description:
      'Computer vision project for detecting and classifying 13 different types of chocolates using deep learning techniques with a two-stage approach.',
    highlights: [
      'Attention U-Net segmentation model',
      'Feature extractor for 13 chocolate classes',
      'PyTorch, OpenCV, NumPy implementation',
      'Complete ML pipeline with Kaggle submission format',
    ],
    outcome:
      'Successfully implemented end-to-end chocolate recognition system with segmentation and classification achieving high accuracy on test data.',
    extra: 'Team collaboration: Mischa Mez, Mathieu Sanchez, Zaynab Hajroun',
  },
  {
    icon: '🧠',
    title: 'Neural Signal and Signal Processing',
    subtitle: 'EPFL | Neural signals and signal processing - NX-421',
    description:
      'Comprehensive neural signal processing project with three miniprojects covering foundational to advanced techniques in computational neuroscience.',
    highlights: [
      'Statistical analysis and data visualization',
      'Neural decoding with machine learning',
      'Real neural data processing and analysis',
      'Python, MATLAB, SciPy, Scikit-learn implementation',
    ],
    outcome:
      'Completed comprehensive analysis of neural signals with advanced signal processing techniques and machine learning approaches.',
    extra: 'Three-part miniproject series in computational neuroscience.',
  },
  {
    icon: '😡',
    title: 'Hate Speech Detection with Emojis',
    subtitle: 'EPFL | Deep learning - EE-559',
    description:
      'Advanced NLP project focusing on hate speech detection in social media content, incorporating emoji analysis for enhanced classification accuracy.',
    highlights: [
      'Emoji integration in text classification',
      'Advanced NLP techniques for social media',
      'Hate speech detection algorithms',
      'Social media data analysis',
    ],
    outcome:
      'Developed robust hate speech detection system incorporating emoji semantics for improved social media content classification.',
    extra: 'Novel approach combining traditional NLP with emoji analysis.',
  },
  {
    icon: '🧠',
    title: 'Computational Neuroscience: Hopfield Networks',
    subtitle: 'EPFL | Computational neurosciences: neuronal dynamics - NX-465',
    description:
      'Implementation and analysis of Hopfield neural networks as associative memory models, exploring their applications in computational neuroscience.',
    highlights: [
      'Associative memory model implementation',
      'Neural network pattern recognition',
      'Computational neuroscience applications',
      'Memory storage and retrieval analysis',
    ],
    outcome:
      'Successfully implemented and analyzed Hopfield networks demonstrating associative memory capabilities and pattern completion.',
    extra: 'Classic neural network model with modern computational analysis.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f8f5ee]">
      <section className="w-full max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10 text-center text-neutral-900">Major Projects</h1>
        
        {/* Semester Projects */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-800 border-b-2 border-neutral-300 pb-2">Semester Projects</h2>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 items-start">
            {semesterProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-800 border-b-2 border-neutral-300 pb-2">Personal Projects</h2>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 items-start">
            {personalProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* Mentionable Projects */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-800 border-b-2 border-neutral-300 pb-2">Mentionable Projects</h2>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 items-start">
            {mentionableProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* GitHub Reference */}
        <div className="text-center mb-8">
          <p className="text-neutral-600 text-sm sm:text-base">
            Additional projects and code repositories can be found on my{' '}
            <a 
              href="https://github.com/mischamez48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </section>
      
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <IconBar />
      </div>
    </main>
  );
} 