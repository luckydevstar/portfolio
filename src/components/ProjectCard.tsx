import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    techStack: string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-500 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-96 overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'translate-y-0' : 'translate-y-1/2'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </div>

        <div
          className={`absolute inset-0 bg-gray-900/95 backdrop-blur-sm transition-all duration-500 flex flex-col justify-between p-6 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1/2 opacity-0'
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 5).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Live</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 transition-all duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {project.description}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
