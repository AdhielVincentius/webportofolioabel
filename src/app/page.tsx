"use client";

import { portfolioData } from "../data/portfolio-data";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Camera,
  Video,
  Code,
  Sparkles,
  Download,
  Award,
  Coffee,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section dengan Desain Modern */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Available for work</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-6">
                {portfolioData.title}
              </p>

              <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg">
                {portfolioData.about}
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Code className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xl">5+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Projects
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Video className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xl">20+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Videos</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xl">3</div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Certifications
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Coffee className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xl">∞</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Coffee</div>
                </div>
              </div>

              {/* CTA Buttons - Responsive Stack */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 font-medium text-center border border-white/20"
                >
                  Contact Me
                </a>
                <a
                  href="/resume/CV_Adhiel Asiabel.pdf"
                  download="Resume_Adhiel Asiabel.pdf"
                  className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 font-medium border border-white/30 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href={portfolioData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:email@example.com"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Animated Circle */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>

                {/* Photo Container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src={portfolioData.photo || "/images/default-profile.jpg"}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl transform group-hover:scale-110 transition">
                  <span className="flex items-center gap-2 text-sm">
                    <Code2 className="w-4 h-4" />
                    Developer
                  </span>
                </div>
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-xl transform group-hover:scale-110 transition">
                  <span className="flex items-center gap-2 text-sm">
                    <Video className="w-4 h-4" />
                    Editor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Skills Section dengan Desain Card Modern */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What I Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Combining development expertise with creative video editing
              capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Programming Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Development</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Tools & Video Editing Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Video & Tools</h3>
              </div>

              {/* Video Editing Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Video Editing</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Adobe Premiere Pro",
                    "After Effects",
                    "DaVinci Resolve",
                    "Final Cut Pro",
                    "CapCut",
                    "Filmora",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                    >
                      <Camera className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Tools */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Development Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "VS Code",
                    "GitHub",
                    "Figma",
                    "Docker",
                    "Postman",
                    "Linux",
                    "Vercel",
                    "Netlify",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section dengan Grid Responsif */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A collection of my best work in development and video editing
            </p>
          </div>

          {/* Menampilkan semua projects tanpa filter */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience dengan Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-blue-200 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition">
                      <span className="text-sm text-blue-600 font-semibold">
                        {edu.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600">{edu.university}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-gray-500">
                          GPA: {edu.gpa}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Indonesia
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-purple-200 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition">
                      <span className="text-sm text-purple-600 font-semibold">
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">
                        {exp.role}
                      </h4>
                      <p className="text-gray-600 font-medium">{exp.company}</p>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's create
            something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:email@example.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-medium inline-flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition font-medium inline-flex items-center gap-2 justify-center border border-white/20"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </>
  );
}