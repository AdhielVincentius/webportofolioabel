'use client';

import { Github, ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string | null;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      {/* Project Image - FIX ASPECT RATIO */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-5xl">{getProjectIcon(title)}</div>
          </div>
        )}
        
        {/* Tech Stack Badge Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex flex-wrap gap-1">
            {tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded text-xs font-medium"
              >
                {t}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded text-xs font-medium">
                +{tech.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Demo/Live Badge */}
        {demo && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
            <Play size={10} className="mr-1" />
            LIVE
          </div>
        )}
      </div>
      
      {/* Project Content - Grow to fill remaining space */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        {/* Full Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t border-gray-100 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              <Github size={18} className="mr-2" />
              Code
            </a>
          )}
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          )}
          
          {!demo && github && (
            <span className="flex items-center text-gray-400 text-sm">
              <ExternalLink size={16} className="mr-2" />
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function untuk icon berdasarkan project title
function getProjectIcon(title: string) {
  if (title.toLowerCase().includes('presensi')) return '📊';
  if (title.toLowerCase().includes('tolong')) return '🆘';
  if (title.toLowerCase().includes('padel')) return '🎾';
  if (title.toLowerCase().includes('commerce')) return '🛒';
  if (title.toLowerCase().includes('dashboard')) return '📈';
  if (title.toLowerCase().includes('mobile')) return '📱';
  if (title.toLowerCase().includes('web')) return '🌐';
  return '💻';
}