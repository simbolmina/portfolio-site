import AboutSection from '@/components/about/AboutSection';
import ArchivementsSection from '@/components/archivements/ArchivementsSection';
import ContactSection from '@/components/contatct/ContactSection';
import FooterSection from '@/components/footer/FooterSection';
import HeroSection from '@/components/header/HeroSection';
import Navbar from '@/components/header/Navbar';
import ProjectSection from '@/components/projects/ProjectSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <ArchivementsSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
