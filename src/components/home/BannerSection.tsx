import { Layers, Sparkles, Rocket } from 'lucide-react';

export const BannerSection = () => {
  const services = [
    {
      icon: Layers,
      title: 'Building scalable web applications',
      description: 'End-to-end solutions from architecture to deployment',
    },
    {
      icon: Sparkles,
      title: 'Creating seamless user experiences',
      description: 'Intuitive interfaces that users love to interact with',
    },
    {
      icon: Rocket,
      title: 'Delivering clean, maintainable code',
      description: 'Best practices and modern development standards',
    },
  ];

  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border-y border-cyan-500/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive approach to web development, combining technical expertise with creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-6 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
