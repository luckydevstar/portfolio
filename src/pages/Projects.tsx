import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import projectsData from '../data/projects.json';

export const Projects = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and expertise in web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
