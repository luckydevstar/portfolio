import { HeroSection } from '../components/home/HeroSection';
import { BannerSection } from '../components/home/BannerSection';
import { SkillsSection } from '../components/home/SkillsSection';
import { EmploymentSection } from '../components/home/EmploymentSection';
import { BlogsSection } from '../components/home/BlogsSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BannerSection />
      <SkillsSection />
      <EmploymentSection />
      <BlogsSection />
      <Footer />
    </div>
  );
};
