import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import blogsData from '../data/blogs.json';

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="relative z-10">
        <button
          onClick={() => navigate('/')}
          className="container mx-auto px-6 mb-8 inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
            {blog.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-400">
            <span className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{blog.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{blog.readTime} min read</span>
            </span>
          </div>
        </div>

        <div className="w-full h-96 mb-12 overflow-hidden">
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 max-w-4xl mb-20">
          <div className="space-y-12">
            {blog.sections.map((section, index) => (
              <section key={index} className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
