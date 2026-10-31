const projects = [
    {
        title: 'Dahsboard Data Analysis Custom',
        description: 'Dashboard for data analysis, custom to the user and with a great user experience, made for warehouse and sales analysis for a clothing store.',
        tags: ['Python', 'Pandas', 'Streamlit', 'Plotly', 'Openpyxl'],
        link: 'https://github.com/Ludovico-B/Dashoboard-Analisi-Custom'
    },
    {
        title: 'Personal Website',
        description: 'This is my personal website, my CV. I designed and developed it to showcase my skills, gear, and projects.',
        tags: ['Node.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
        link: 'https://github.com/Ludovico-B/My-personal-website'
    },
    {
        title: 'Luce Connessa Impianti',
        description: 'Landing page for an Italian company that deals with electrical systems, photovoltaic systems, air conditioning systems and security systems.',
        tags: ['Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        link: 'https://github.com/Ludovico-B/UI-UX-Design-Luce-s-Company'
    },
    {
        title: 'Shifts Scheduler',
        description: 'A webapp for managing shifts for employees with a focus on user experience and ease of use, main feature is AI that learns from past shifts and create new ones.',
        tags: ['Python', 'Node.js', 'React', 'Tailwind CSS', 'AI'],
        link: 'https://github.com/Ludovico-B/Shifts-Scheduler'
    },
    {
        title: 'Forecasting Meta Prophet',
        description: 'A program for forecasting sales using Meta Prophet Machine Learning.',
        tags: ['Python', 'Meta Prophet', 'Machine Learning'],
        link: 'https://github.com/Ludovico-B/Forecastin-Meta-Prophet'
    },
    {
        title: 'La Barberia al Barbe',
        description: 'A Professional Website for a Barbershop in Omegna, landing page for only the view and contact to booking a reservation.',
        tags: ['Node.js', 'Tailwind CSS', 'TypeScript', 'Vite', 'React'],
        link: 'https://github.com/Ludovico-B/LaBarberiaAlBarbe-website'
    },
];

const hostFrom = (url) => {
    try {
        return new URL(url).host.replace('www.', '');
    } catch {
        return url;
    }
};

const initials = (title) =>
    title
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase();

const ProjectGrid = () => {
    return (
        <section className="section">
            <h2 className="section-title">Progetti</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <a
                        key={project.link}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <span className="project-mark">{initials(project.title)}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <span className="project-meta">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
                                <path d="M14 11a5 5 0 0 0-7.07 0L5.5 12.41a5 5 0 0 0 7.07 7.07L14 18.07" />
                            </svg>
                            {hostFrom(project.link)}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
