import IconBar from '../../components/IconBar';
import TimelineItem from '../../components/TimelineItem';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const education = [
  {
    icon: <FaGraduationCap />,
    title: 'Master in Robotics (Currently Semester 3)',
    subtitle: 'École Polytechnique Fédérale de Lausanne (EPFL) | Minor in Neuro-X',
    description: 'Expected completion: 2025',
    color: 'bg-blue-600',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Bachelor in Microtechnology (Completed July 2023)',
    subtitle: 'École Polytechnique Fédérale de Lausanne (EPFL)',
    color: 'bg-blue-400',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Federal Bilingual Maturity Diploma (German/French)',
    subtitle: 'Gymnase de Nyon (Completed July 2018)',
    color: 'bg-blue-300',
  },
];

const work = [
  {
    icon: <FaBriefcase />,
    title: 'CERN Science Gateway Guide',
    subtitle: 'Oct 2023 - Oct 2024',
    description: 'Educational visit organization, team leadership, science communication, public engagement',
    color: 'bg-green-600',
  },
  {
    icon: <FaBriefcase />,
    title: 'Sales Advisor - Fortuna Protection Juridique',
    subtitle: 'Jun 2022 - Oct 2023',
    description: 'Legal protection solutions, client consultation, coverage planning',
    color: 'bg-green-500',
  },
  {
    icon: <FaBriefcase />,
    title: 'Insurance Manager - Generali Assurance',
    subtitle: 'Jun 2019 - Sep 2022',
    description: 'Client portfolio management, team coordination, customer service',
    color: 'bg-green-400',
  },
  {
    icon: <FaBriefcase />,
    title: 'Retail Associate - Migros',
    subtitle: 'Aug 2020 - Dec 2022',
    description: 'Part-time customer service (20%), sales, customer relations',
    color: 'bg-green-300',
  },
];

export default function TimelinePage() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f8f5ee]">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10 text-center text-neutral-900">Timeline</h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-4 sm:mt-6 text-neutral-800">Education</h2>
        <div className="relative ml-4 sm:ml-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200">
          {education.map((item, idx) => (
            <TimelineItem key={item.title} {...item} idx={idx} />
          ))}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 lg:mt-10 text-neutral-800">Work Experience</h2>
        <div className="relative ml-4 sm:ml-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200">
          {work.map((item, idx) => (
            <TimelineItem key={item.title} {...item} idx={idx} />
          ))}
        </div>
      </section>
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <IconBar />
      </div>
    </main>
  );
} 