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
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) setActiveSection(id);
        }
      }
      if (window.scrollY < 100) setActiveSection("hero");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ─── FLOATING NAV ─── */}
      <nav className="port-nav">
        <div className="port-nav__inner">
          <span className="port-nav__logo">
            {(portfolioData.name || "AV")
              .split(" ")
              .map((w: string) => w[0])
              .join("")}
          </span>
          <div className="port-nav__links">
            <a
              href="#"
              className={`port-nav__link ${activeSection === "hero" ? "port-nav__link--active" : ""}`}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`port-nav__link ${activeSection === "projects" ? "port-nav__link--active" : ""}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`port-nav__link ${activeSection === "contact" ? "port-nav__link--active" : ""}`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        {/* Scanline atmosphere */}
        <div className="hero__scanline" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />

        <div
          className={`hero__content ${isVisible ? "hero__content--visible" : ""}`}
        >
          {/* Left */}
          <div className="hero__left">
            <span className="hero__badge">
              <Sparkles className="hero__badge-icon" />
              Available for work
            </span>

            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">{portfolioData.name}</span>
            </h1>

            <p className="hero__subtitle">{portfolioData.title}</p>
            <p className="hero__bio">{portfolioData.about}</p>

            {/* Stats */}
            <div className="stats">
              {[
                {
                  icon: <Code className="stat__icon stat__icon--blue" />,
                  value: "5+",
                  label: "Projects",
                },
                {
                  icon: <Video className="stat__icon stat__icon--violet" />,
                  value: "20+",
                  label: "Videos",
                },
                {
                  icon: <Award className="stat__icon stat__icon--amber" />,
                  value: "3",
                  label: "Certs",
                },
                {
                  icon: <Coffee className="stat__icon stat__icon--orange" />,
                  value: "∞",
                  label: "Coffee",
                },
              ].map((s) => (
                <div key={s.label} className="stat">
                  {s.icon}
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero__ctas">
              <a href="#projects" className="btn btn--primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn--ghost">
                Contact Me
              </a>
              <a
                href="/resume/CV_AdhielAsiabel.pdf"
                download="CV_Adhiel_Asiabel.pdf"
                className="btn btn--outline"
              >
                <Download className="btn__icon" />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="hero__socials">
              {[
                {
                  href: portfolioData.github,
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
                {
                  href: portfolioData.linkedin,
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: portfolioData.instagram,
                  icon: <Instagram size={18} />,
                  label: "Instagram",
                },
                {
                  href: `mailto:${portfolioData.email || "vincent.adhiel28@gmail.com"}`,
                  icon: <Mail size={18} />,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href?.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right – photo */}
          <div className="hero__right">
            <div className="avatar-wrap">
              <div className="avatar-wrap__ring" aria-hidden="true" />
              <div className="avatar-wrap__photo">
                <img
                  src={portfolioData.photo || "/images/default-profile.jpg"}
                  alt={portfolioData.name}
                  className="avatar-wrap__img"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400?text=Photo";
                  }}
                />
              </div>
              <span className="avatar-badge avatar-badge--br">
                <Code2 size={14} /> Developer
              </span>
              <span className="avatar-badge avatar-badge--tl">
                <Video size={14} /> Editor
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#skills" className="hero__scroll-cue" aria-label="Scroll down">
          <ArrowDown size={18} />
        </a>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="section section--light">
        <div className="section__container">
          <div className="section__head">
            <span className="eyebrow">What I Do</span>
            <h2 className="section__title">
              Technical <em>Skills</em>
            </h2>
            <p className="section__desc">
              Development craft meets creative storytelling.
            </p>
          </div>

          <div className="skills-grid">
            {/* Dev skills */}
            <div className="card">
              <div className="card__header">
                <div className="card__icon card__icon--blue">
                  <Code2 size={20} />
                </div>
                <h3 className="card__title">Development</h3>
              </div>
              <div className="skill-list">
                {portfolioData.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card">
              <div className="card__header">
                <div className="card__icon card__icon--violet">
                  <Video size={20} />
                </div>
                <h3 className="card__title">Video & Tools</h3>
              </div>

              <div className="tools-block">
                <h4 className="tools-block__title">Video Editing</h4>
                <div className="tools-grid">
                  {[
                    "Adobe Premiere Pro",
                    "After Effects",
                    "DaVinci Resolve",
                    "Final Cut Pro",
                    "CapCut",
                    "Filmora",
                  ].map((t) => (
                    <div key={t} className="tool-chip tool-chip--video">
                      <Camera size={13} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tools-block">
                <h4 className="tools-block__title">Dev Tools</h4>
                <div className="tags">
                  {[
                    "VS Code",
                    "GitHub",
                    "Figma",
                    "Docker",
                    "Postman",
                    "Linux",
                    "Vercel",
                    "Netlify",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="section section--white">
        <div className="section__container">
          <div className="section__head">
            <span className="eyebrow">Portfolio</span>
            <h2 className="section__title">
              Featured <em>Projects</em>
            </h2>
            <p className="section__desc">
              Selected work in development and video editing.
            </p>
          </div>

          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {portfolioData.projects.length === 0 && (
            <p className="empty-state">No projects to display yet.</p>
          )}
        </div>
      </section>

      {/* ─── EDUCATION & EXPERIENCE ─── */}
      <section className="section section--light">
        <div className="section__container">
          <div className="section__head">
            <span className="eyebrow">Journey</span>
            <h2 className="section__title">
              Education & <em>Experience</em>
            </h2>
          </div>

          <div className="journey-grid">
            {/* Education */}
            <div className="card">
              <div className="card__header">
                <div className="card__icon card__icon--blue">
                  <GraduationCap size={20} />
                </div>
                <h3 className="card__title">Education</h3>
              </div>
              <div className="timeline">
                {portfolioData.education.map(
                  (
                    edu: {
                      year: string;
                      degree: string;
                      university: string;
                      gpa: string;
                    },
                    i: number,
                  ) => (
                    <div key={i} className="timeline__item">
                      <div className="timeline__dot timeline__dot--blue" />
                      <div className="timeline__body">
                        <span className="timeline__period">{edu.year}</span>
                        <h4 className="timeline__role">{edu.degree}</h4>
                        <p className="timeline__org">{edu.university}</p>
                        <div className="timeline__meta">
                          <span>GPA: {edu.gpa}</span>
                          <span className="timeline__meta-sep" />
                          <MapPin size={12} /> Indonesia
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Experience */}
            <div className="card">
              <div className="card__header">
                <div className="card__icon card__icon--violet">
                  <Briefcase size={20} />
                </div>
                <h3 className="card__title">Experience</h3>
              </div>
              <div className="timeline">
                {portfolioData.experiences.map(
                  (
                    exp: {
                      period: string;
                      role: string;
                      company: string;
                      description: string;
                    },
                    i: number,
                  ) => (
                    <div key={i} className="timeline__item">
                      <div className="timeline__dot timeline__dot--violet" />
                      <div className="timeline__body">
                        <span className="timeline__period">{exp.period}</span>
                        <h4 className="timeline__role">{exp.role}</h4>
                        <p className="timeline__org">{exp.company}</p>
                        <p className="timeline__desc">{exp.description}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section section--dark">
        <div className="section__container">
          <div className="contact-inner">
            <span className="eyebrow eyebrow--light">Get in touch</span>
            <h2 className="section__title section__title--light">
              Let's Work <em>Together</em>
            </h2>
            <p className="section__desc section__desc--light">
              Have a project in mind or just want to say hi? I'm always open to
              new collaborations.
            </p>
            <div className="contact-ctas">
              <a
                href={`mailto:${portfolioData.email || "vincent.adhiel28@gmail.com"}`}
                className="btn btn--primary"
              >
                <Mail className="btn__icon" /> Send Message
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <Github className="btn__icon" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL STYLES ─── */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&display=swap");

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --navy: #080e1e;
          --navy-2: #0e1729;
          --navy-3: #141e35;
          --blue: #4f8ef7;
          --blue-dim: #243554;
          --violet: #a78bfa;
          --violet-dim: #2d2050;
          --amber: #f59e0b;
          --orange: #fb923c;
          --slate-50: #f8fafc;
          --slate-100: #f1f5f9;
          --slate-200: #e2e8f0;
          --slate-400: #94a3b8;
          --slate-600: #475569;
          --slate-800: #1e293b;
          --white: #ffffff;
          --text-on-dark: #cbd5e1;
          --radius: 14px;
          --shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.12);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", system-ui, sans-serif;
          background: var(--white);
          color: var(--slate-800);
          -webkit-font-smoothing: antialiased;
        }

        em {
          font-style: normal;
          background: linear-gradient(135deg, var(--blue), var(--violet));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── NAV ── */
        .port-nav {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          width: calc(100% - 32px);
          max-width: 640px;
        }
        .port-nav__inner {
          background: rgba(8, 14, 30, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .port-nav__logo {
          font-family: "Syne", sans-serif;
          font-weight: 800;
          font-size: 15px;
          background: linear-gradient(135deg, var(--blue), var(--violet));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .port-nav__links {
          display: flex;
          gap: 4px;
        }
        .port-nav__link {
          color: var(--text-on-dark);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .port-nav__link:hover,
        .port-nav__link--active {
          background: rgba(79, 142, 247, 0.15);
          color: var(--blue);
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100svh;
          background: var(--navy);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 96px 24px 80px;
        }
        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(79, 142, 247, 0.04) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(79, 142, 247, 0.04) 1px,
              transparent 1px
            );
          background-size: 48px 48px;
        }
        .hero__scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--blue),
            transparent
          );
          animation: scanline 6s linear infinite;
          opacity: 0.3;
        }
        @keyframes scanline {
          from {
            top: -2px;
          }
          to {
            top: 100%;
          }
        }

        .hero__content {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .hero__content--visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 1024px) {
          .hero__content {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .hero__left {
            flex: 1;
          }
          .hero__right {
            flex: 0 0 auto;
          }
        }

        .hero__left {
          text-align: center;
        }
        @media (min-width: 1024px) {
          .hero__left {
            text-align: left;
          }
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79, 142, 247, 0.12);
          border: 1px solid rgba(79, 142, 247, 0.25);
          color: var(--blue);
          font-size: 13px;
          font-weight: 500;
          padding: 7px 16px;
          border-radius: 50px;
          margin-bottom: 24px;
        }
        .hero__badge-icon {
          width: 13px;
          height: 13px;
        }

        .hero__title {
          font-family: "Syne", sans-serif;
          font-size: clamp(2rem, 6vw, 3.75rem);
          font-weight: 800;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .hero__name {
          background: linear-gradient(
            135deg,
            var(--blue) 0%,
            var(--violet) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: var(--text-on-dark);
          font-weight: 500;
          margin-bottom: 16px;
        }
        .hero__bio {
          font-size: 15px;
          color: var(--slate-400);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 32px;
        }
        @media (min-width: 1024px) {
          .hero__bio {
            margin-left: 0;
          }
        }

        /* Stats */
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 32px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1024px) {
          .stats {
            margin-left: 0;
            margin-right: 0;
          }
        }
        .stat {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 14px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition:
            background 0.2s,
            transform 0.2s;
        }
        .stat:hover {
          background: rgba(255, 255, 255, 0.07);
          transform: translateY(-2px);
        }
        .stat__icon {
          width: 20px;
          height: 20px;
        }
        .stat__icon--blue {
          color: var(--blue);
        }
        .stat__icon--violet {
          color: var(--violet);
        }
        .stat__icon--amber {
          color: var(--amber);
        }
        .stat__icon--orange {
          color: var(--orange);
        }
        .stat__value {
          font-family: "Syne", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
        }
        .stat__label {
          font-size: 11px;
          color: var(--slate-400);
        }

        /* Buttons */
        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 28px;
        }
        @media (min-width: 1024px) {
          .hero__ctas {
            justify-content: flex-start;
          }
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }
        .btn__icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .btn--primary {
          background: linear-gradient(135deg, var(--blue), var(--violet));
          color: var(--white);
          box-shadow: 0 4px 16px rgba(79, 142, 247, 0.35);
        }
        .btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(79, 142, 247, 0.45);
        }
        .btn--ghost {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--white);
        }
        .btn--ghost:hover {
          background: rgba(255, 255, 255, 0.13);
        }
        .btn--outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--slate-400);
        }
        .btn--outline:hover {
          border-color: rgba(255, 255, 255, 0.4);
          color: var(--white);
        }

        /* Socials */
        .hero__socials {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .hero__socials {
            justify-content: flex-start;
          }
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: var(--slate-400);
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: rgba(79, 142, 247, 0.15);
          color: var(--blue);
          border-color: rgba(79, 142, 247, 0.3);
          transform: translateY(-2px);
        }

        /* Avatar */
        .avatar-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-wrap__ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--violet));
          animation: spin 10s linear infinite;
          opacity: 0.7;
          mask-image: radial-gradient(transparent 68%, black 70%);
          -webkit-mask-image: radial-gradient(transparent 68%, black 70%);
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .avatar-wrap__photo {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 60px rgba(79, 142, 247, 0.2);
        }
        @media (min-width: 640px) {
          .avatar-wrap__photo {
            width: 280px;
            height: 280px;
          }
        }
        @media (min-width: 1024px) {
          .avatar-wrap__photo {
            width: 320px;
            height: 320px;
          }
        }
        .avatar-wrap__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .avatar-wrap:hover .avatar-wrap__img {
          transform: scale(1.05);
        }
        .avatar-badge {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: var(--white);
          box-shadow: var(--shadow-lg);
        }
        .avatar-badge--br {
          bottom: 8px;
          right: -8px;
          background: linear-gradient(135deg, var(--blue), #3b5fcc);
        }
        .avatar-badge--tl {
          top: 8px;
          left: -8px;
          background: linear-gradient(135deg, var(--violet), #7c3aed);
        }

        /* Scroll cue */
        .hero__scroll-cue {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--slate-400);
          text-decoration: none;
          animation: bounce 2s ease-in-out infinite;
          transition: color 0.2s;
        }
        .hero__scroll-cue:hover {
          color: var(--blue);
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(8px);
          }
        }

        /* ── SECTIONS ── */
        .section {
          padding: 80px 24px;
        }
        .section--light {
          background: var(--slate-50);
        }
        .section--white {
          background: var(--white);
        }
        .section--dark {
          background: var(--navy);
          background-image: linear-gradient(
            135deg,
            var(--navy) 0%,
            #1a0a35 100%
          );
        }
        .section__container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section__head {
          text-align: center;
          margin-bottom: 52px;
        }
        .eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 10px;
        }
        .eyebrow--light {
          color: var(--blue);
        }
        .section__title {
          font-family: "Syne", sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--slate-800);
          line-height: 1.15;
        }
        .section__title--light {
          color: var(--white);
        }
        .section__desc {
          margin-top: 12px;
          color: var(--slate-400);
          font-size: 15px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .section__desc--light {
          color: var(--text-on-dark);
        }

        /* ── CARDS ── */
        .skills-grid,
        .journey-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .skills-grid,
          .journey-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          background: var(--white);
          border-radius: var(--radius);
          border: 1px solid var(--slate-200);
          padding: 28px 28px 32px;
          box-shadow: var(--shadow);
          transition:
            box-shadow 0.25s,
            transform 0.25s;
        }
        .section--light .card {
          background: var(--white);
        }
        .card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }
        .card__header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .card__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          flex-shrink: 0;
        }
        .card__icon--blue {
          background: rgba(79, 142, 247, 0.1);
          color: var(--blue);
        }
        .card__icon--violet {
          background: rgba(167, 139, 250, 0.1);
          color: var(--violet);
        }
        .card__title {
          font-family: "Syne", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--slate-800);
        }

        /* ── SKILL LIST ── */
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── TOOLS ── */
        .tools-block {
          margin-bottom: 24px;
        }
        .tools-block:last-child {
          margin-bottom: 0;
        }
        .tools-block__title {
          font-size: 13px;
          font-weight: 600;
          color: var(--slate-600);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .tool-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;
        }
        .tool-chip--video {
          background: rgba(167, 139, 250, 0.08);
          color: var(--slate-600);
          border: 1px solid rgba(167, 139, 250, 0.15);
        }
        .tool-chip--video:hover {
          background: rgba(167, 139, 250, 0.14);
        }
        .tool-chip--video svg {
          color: var(--violet);
          flex-shrink: 0;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag {
          padding: 7px 13px;
          background: var(--slate-100);
          border: 1px solid var(--slate-200);
          border-radius: 8px;
          font-size: 13px;
          color: var(--slate-600);
          transition: all 0.2s;
        }
        .tag:hover {
          background: rgba(79, 142, 247, 0.08);
          border-color: rgba(79, 142, 247, 0.2);
          color: var(--blue);
        }

        /* ── PROJECTS GRID ── */
        .projects-grid {
          display: grid;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .empty-state {
          text-align: center;
          color: var(--slate-400);
          padding: 48px 0;
        }

        /* ── TIMELINE ── */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline__item {
          position: relative;
          padding-left: 26px;
          padding-bottom: 28px;
          border-left: 2px solid var(--slate-200);
        }
        .timeline__item:last-child {
          padding-bottom: 0;
          border-left-color: transparent;
        }
        .timeline__dot {
          position: absolute;
          left: -7px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .timeline__dot--blue {
          background: var(--blue);
          box-shadow: 0 0 0 3px rgba(79, 142, 247, 0.18);
        }
        .timeline__dot--violet {
          background: var(--violet);
          box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.18);
        }
        .timeline__body {
          background: var(--slate-50);
          border: 1px solid var(--slate-200);
          border-radius: 10px;
          padding: 16px 18px;
        }
        .timeline__period {
          font-size: 12px;
          font-weight: 600;
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .timeline__role {
          font-size: 16px;
          font-weight: 700;
          color: var(--slate-800);
          margin-top: 4px;
        }
        .timeline__org {
          font-size: 14px;
          color: var(--slate-600);
          font-weight: 500;
          margin-top: 2px;
        }
        .timeline__meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          font-size: 12px;
          color: var(--slate-400);
        }
        .timeline__meta-sep {
          width: 1px;
          height: 12px;
          background: var(--slate-300);
        }
        .timeline__desc {
          font-size: 14px;
          color: var(--slate-600);
          margin-top: 8px;
          line-height: 1.65;
        }

        /* ── CONTACT ── */
        .contact-inner {
          text-align: center;
          max-width: 540px;
          margin: 0 auto;
        }
        .contact-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 32px;
        }

        /* ── RESPONSIVE FIXES ── */
        @media (max-width: 480px) {
          .hero {
            padding: 80px 20px 72px;
          }
          .stats {
            grid-template-columns: repeat(2, 1fr);
            max-width: 280px;
          }
          .hero__ctas {
            flex-direction: column;
            align-items: stretch;
          }
          .btn {
            justify-content: center;
          }
          .section {
            padding: 60px 20px;
          }
          .card {
            padding: 22px 20px 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__scanline,
          .avatar-wrap__ring,
          .hero__scroll-cue,
          .stat {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
