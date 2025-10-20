import {
    Code2,
    Boxes,
    Palette,
    Server,
    Database,
    Layout,
    Workflow,
    Cloud,
    Container,
    Figma,
  } from 'lucide-react';
  
  interface Skill {
    name: string;
    icon: React.ReactNode;
  }
  
  export const SkillsSection = () => {
    const bestAtSkills: Skill[] = [
      { name: 'JavaScript/TypeScript', icon: <Code2 size={20} /> },
      { name: 'React', icon: <Boxes size={20} /> },
      { name: 'Next.js', icon: <Layout size={20} /> },
      { name: 'Tailwind CSS', icon: <Palette size={20} /> },
      { name: 'Node.js', icon: <Server size={20} /> },
      { name: 'Express', icon: <Workflow size={20} /> },
      { name: 'NestJS', icon: <Database size={20} /> },
    ];
  
    const alsoWorkWithSkills: Skill[] = [
      { name: 'Angular', icon: <Boxes size={20} /> },
      { name: 'Python', icon: <Code2 size={20} /> },
      { name: 'Django', icon: <Server size={20} /> },
      { name: 'Flask', icon: <Workflow size={20} /> },
      { name: 'FastAPI', icon: <Database size={20} /> },
      { name: 'Figma', icon: <Figma size={20} /> },
      { name: 'AWS', icon: <Cloud size={20} /> },
      { name: 'Azure DevOps', icon: <Cloud size={20} /> },
      { name: 'Docker', icon: <Container size={20} /> },
    ];
  
    const SkillChip = ({ skill }: { skill: Skill }) => (
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
        <span className="text-cyan-400">{skill.icon}</span>
        <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
      </div>
    );
  
    return (
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A versatile tech stack covering both frontend and backend development,
              allowing me to build complete solutions from database to user interface
            </p>
          </div>
  
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Best at
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Core technologies I use daily to build production-ready applications
              </p>
              <div className="flex flex-wrap gap-3">
                {bestAtSkills.map((skill, index) => (
                  <SkillChip key={index} skill={skill} />
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Also work with
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Additional tools and frameworks I leverage for specialized projects
              </p>
              <div className="flex flex-wrap gap-3">
                {alsoWorkWithSkills.map((skill, index) => (
                  <SkillChip key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  