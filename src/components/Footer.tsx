import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{portfolioData.name}</h3>
            <p className="text-gray-400">{portfolioData.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}