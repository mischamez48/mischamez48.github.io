import IconBar from '../../components/IconBar';
import AboutCard from '../../components/AboutCard';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-12 bg-[#f8f5ee]">
      <AboutCard />
      <IconBar />
    </main>
  );
} 