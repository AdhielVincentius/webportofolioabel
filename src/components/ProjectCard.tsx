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

function getProjectIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes('presensi') || t.includes('attendance')) return '📊';
  if (t.includes('tolong')) return '🆘';
  if (t.includes('padel')) return '🎾';
  if (t.includes('commerce') || t.includes('e-commerce')) return '🛒';
  if (t.includes('dashboard')) return '📈';
  if (t.includes('mobile')) return '📱';
  if (t.includes('cafe')) return '☕';
  if (t.includes('gallery') || t.includes('art')) return '🎨';
  if (t.includes('catalog')) return '📚';
  return '💻';
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="pc">
      {/* Thumbnail */}
      <div className="pc__thumb">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            className="pc__img"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="pc__placeholder">
            <span className="pc__emoji">{getProjectIcon(title)}</span>
          </div>
        )}

        {/* Tech overlay */}
        <div className="pc__tech-overlay">
          {tech.slice(0, 3).map((t) => (
            <span key={t} className="pc__tech-pill">{t}</span>
          ))}
          {tech.length > 3 && (
            <span className="pc__tech-pill">+{tech.length - 3}</span>
          )}
        </div>

        {demo && (
          <span className="pc__live-badge">
            <Play size={9} />
            LIVE
          </span>
        )}
      </div>

      {/* Body */}
      <div className="pc__body">
        <h3 className="pc__title">{title}</h3>
        <p className="pc__desc">{description}</p>

        {/* Full tech tags */}
        <div className="pc__tags">
          {tech.map((t) => (
            <span key={t} className="pc__tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="pc__footer">
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="pc__btn pc__btn--primary">
            <ExternalLink size={14} />
            Live Demo
          </a>
        ) : null}

        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer" className="pc__btn pc__btn--dark">
            <Github size={14} />
            GitHub
          </a>
        ) : null}

        {!demo && !github && (
          <span className="pc__btn pc__btn--muted">Not Published</span>
        )}
      </div>

      <style jsx>{`
        .pc {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,.07);
          transition: box-shadow .25s, transform .25s;
          height: 100%;
        }
        .pc:hover {
          box-shadow: 0 10px 40px rgba(0,0,0,.13);
          transform: translateY(-4px);
        }

        /* Thumbnail */
        .pc__thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: linear-gradient(135deg, #EEF2FF 0%, #F0FDF4 100%);
          flex-shrink: 0;
        }
        .pc__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s;
        }
        .pc:hover .pc__img { transform: scale(1.06); }

        .pc__placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%);
        }
        .pc__emoji { font-size: 2.75rem; line-height: 1; }

        .pc__tech-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 12px 10px;
          background: linear-gradient(to top, rgba(0,0,0,.65), transparent);
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .pc__tech-pill {
          padding: 3px 9px;
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(6px);
          border-radius: 5px;
          font-size: 11px;
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
        }

        .pc__live-badge {
          position: absolute;
          top: 10px; right: 10px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #22C55E;
          color: #fff;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .06em;
          box-shadow: 0 2px 8px rgba(34,197,94,.4);
        }

        /* Body */
        .pc__body {
          padding: 20px 20px 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 0;
        }
        .pc__title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1E293B;
          line-height: 1.3;
          transition: color .2s;
        }
        .pc:hover .pc__title { color: #4F8EF7; }

        .pc__desc {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.65;
          /* clamp to 3 lines */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .pc__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding-bottom: 4px;
        }
        .pc__tag {
          padding: 4px 10px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          font-size: 11.5px;
          color: #475569;
          font-weight: 500;
          transition: all .2s;
          white-space: nowrap;
        }
        .pc__tag:hover {
          background: rgba(79,142,247,.08);
          border-color: rgba(79,142,247,.25);
          color: #4F8EF7;
        }

        /* Footer */
        .pc__footer {
          padding: 14px 20px 18px;
          border-top: 1px solid #F1F5F9;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 12px;
        }
        .pc__btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all .2s;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }
        .pc__btn--primary {
          flex: 1;
          justify-content: center;
          background: linear-gradient(135deg, #4F8EF7, #A78BFA);
          color: #fff;
          box-shadow: 0 3px 12px rgba(79,142,247,.3);
        }
        .pc__btn--primary:hover {
          box-shadow: 0 5px 18px rgba(79,142,247,.45);
          transform: translateY(-1px);
        }
        .pc__btn--dark {
          background: #1E293B;
          color: #fff;
        }
        .pc__btn--dark:hover { background: #0F172A; transform: translateY(-1px); }
        .pc__btn--muted {
          flex: 1;
          justify-content: center;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #94A3B8;
          cursor: default;
        }

        /* Responsive: jika hanya ada satu button, dia full width */
        .pc__footer .pc__btn:only-child {
          flex: 1;
          justify-content: center;
        }
      `}</style>
    </article>
  );
}