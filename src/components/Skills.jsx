import React from 'react';
import { skillCategories } from '../data/skills';
import { 
  Code2, Globe, HardDrive, Cpu, Wrench, 
  Terminal, Coffee, Database, FileCode, Palette, 
  Zap, Atom, Layers, Network, Server, GitBranch, 
  Github, Code, Send 
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  HardDrive: HardDrive,
  Cpu: Cpu,
  Wrench: Wrench,
  Terminal: Terminal,
  Coffee: Coffee,
  Database: Database,
  FileCode: FileCode,
  Palette: Palette,
  Zap: Zap,
  Atom: Atom,
  Layers: Layers,
  Network: Network,
  Server: Server,
  GitBranch: GitBranch,
  Github: Github,
  Code: Code,
  Send: Send
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with.</p>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || Code2;

            return (
              <div key={category.title} className="card-glass skill-category-card">
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <CategoryIcon size={20} color="var(--accent-primary)" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="skills-pill-container">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code;

                    return (
                      <div key={skill.name} className="skill-pill">
                        <SkillIcon size={16} color="var(--accent-ai)" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .skill-category-card {
          padding: 28px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .category-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skills-pill-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.25s ease;
          cursor: default;
        }

        .skill-pill:hover {
          background-color: rgba(99, 102, 241, 0.12);
          border-color: var(--accent-primary);
          color: var(--text-main);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
