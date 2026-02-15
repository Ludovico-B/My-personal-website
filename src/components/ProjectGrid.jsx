import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
        style={{
            display: 'block',
            border: '1px solid black',
            padding: '2rem',
            height: '100%',
            transition: 'transform 0.2s',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-4px, -4px)';
            e.currentTarget.style.boxShadow = '4px 4px 0px 0px black';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 className="text-medium" style={{ fontWeight: 700 }}>{title}</h3>
            <ArrowUpRight size={20} />
        </div>
        <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: '0.75rem',
                        border: '1px solid black',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '999px' // Pill shape
                    }}
                >
                    {tag}
                </span>
            ))}
        </div>
    </a>
);

const ProjectGrid = () => {
    const projects = [
        {
            title: 'Luce Connessa Impianti',
            description: 'Landing page for an Italian company that deals with electrical systems, photovoltaic systems, air conditioning systems and security systems.',
            tags: ['Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
            link: 'https://github.com/Ludovico-B/UI-UX-Design-Luce-s-Company'
        },
        {
            title: 'Shifts Scheduler',
            description: 'A webapp for managing shifts for employees with a focus on user experience and ease of use, main feature is AI that learns from past shifts and create new ones.',
            tags: ['React', 'Node.js', 'Tailwind CSS'],
            link: 'https://github.com/Ludovico-B/Shifts-Scheduler'
        },
        {
            title: 'Forecasting Meta Prophet',
            description: 'A program for forecasting sales using Meta Prophet Machine Learning.',
            tags: ['Python', 'Meta Prophet', 'Machine Learning'],
            link: 'https://github.com/Ludovico-B/Forecastin-Meta-Prophet'
        }
    ];

    return (
        <section className="section">
            <h2 className="text-large" style={{ marginBottom: '3rem', paddingBottom: '1rem' }}>
                Progetti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
