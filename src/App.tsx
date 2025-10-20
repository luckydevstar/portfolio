import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { BlogDetail } from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
