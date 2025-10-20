import { Github, Linkedin, Twitter, DownloadCloud, Mail } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/luckydevstar', label: 'GitHub' },
    // { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    // { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:johnezekiele30@gmail.com', label: 'Email' },
    { icon: DownloadCloud, url: "https://drive.google.com/file/d/1x6z-QDCC-eULnc8LMiIneymf7ced21Bu/view?usp=sharing", label: "Download Resume Here"},
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
  ];

  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-400 text-sm">Built with:</span>
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 text-gray-300 text-sm"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
                {index < techStack.length - 1 && (
                  <span className="text-gray-600 ml-2">•</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
