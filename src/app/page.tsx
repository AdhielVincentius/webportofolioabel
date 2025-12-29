import { portfolioData } from '../data/portfolio-data';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm{' '}
                <span className="text-blue-600">{portfolioData.name}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {portfolioData.title}
              </p>
              <p className="text-gray-500 mb-8 max-w-lg">
                {portfolioData.about}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  GitHub Profile
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  LinkedIn Profile
                </a>
                <a
                  href={portfolioData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Instagram Profile
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
              {/* Photo Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  {/* PASTIKAN PATH INI SESUAI DENGAN FILE ANDA */}
                  <img
                    src={portfolioData.photo || "/images/default-profile.jpg"}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Programming</h3>
              {portfolioData.skills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['VS Code', 'GitHub', 'Figma', 'Docker', 'Postman', 'Linux'].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-blue-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="mb-6 p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.university}</p>
                  <div className="flex justify-between mt-2 text-gray-500">
                    <span>{edu.year}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="text-green-500 mr-4" size={32} />
                <h3 className="text-3xl font-bold">Experience</h3>
              </div>
              {portfolioData.experiences.map((exp, index) => (
                <div key={index} className="mb-6 p-6 bg-green-50 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                  <p className="text-gray-700 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}