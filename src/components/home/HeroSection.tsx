import { ChevronDown, Code, Zap, Target } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            Welcome to My Portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Full Stack Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Crafting exceptional digital experiences with modern technologies
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
          Passionate about building scalable applications that solve real-world problems.
          Specialized in creating seamless user experiences from concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all">
            <Code className="text-cyan-400 mb-3" size={32} />
            <h3 className="text-white font-semibold mb-1">Clean Code</h3>
            <p className="text-gray-400 text-sm">Maintainable & scalable</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all">
            <Zap className="text-cyan-400 mb-3" size={32} />
            <h3 className="text-white font-semibold mb-1">Fast Performance</h3>
            <p className="text-gray-400 text-sm">Optimized for speed</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all">
            <Target className="text-cyan-400 mb-3" size={32} />
            <h3 className="text-white font-semibold mb-1">User Focused</h3>
            <p className="text-gray-400 text-sm">Intuitive experiences</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-full font-medium hover:bg-cyan-500/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};
