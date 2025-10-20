import { Briefcase } from 'lucide-react';
import employmentData from '../../data/employment.json';

export const EmploymentSection = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Employment History
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through leading tech companies, continuously growing and taking on new challenges
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transform md:-translate-x-1/2"></div>

          {employmentData.map((job, index) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 ml-8 md:ml-0">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {job.company}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{job.role}</p>
                    <p className="text-gray-400 text-sm">{job.period}</p>
                  </div>
                </div>

                <div className="absolute -left-3.5 md:left-1/2 top-2 w-8 h-8 bg-cyan-500 rounded-full border-4 border-gray-900 flex items-center justify-center transform md:-translate-x-1/2">
                  <Briefcase size={16} className="text-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-cyan-400">7+ years</span> of professional experience building web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
