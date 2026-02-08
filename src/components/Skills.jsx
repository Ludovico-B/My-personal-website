import React from 'react';

const SkillCategory = ({ title, skills }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h3 className="text-medium" style={{ marginBottom: '1rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map((skill, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: '1rem',
                        border: '1px solid black',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'white'
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillSets = [
        {
            title: 'Languages',
            skills: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'SQL']
        },
        {
            title: 'Frontend',
            skills: ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'PostgreSQL', 'MySQL', 'Git']
        },
        {
            title: 'Data Analysis',
            skills: ['Excel', 'Power BI', 'NumPy', 'Pandas', 'Google Analytics']
        }
    ];

    return (
        <section className="section">
            <h2 className="text-large" style={{ marginBottom: '3rem', paddingBottom: '1rem' }}>
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '2rem' }}>
                {skillSets.map((set, index) => (
                    <SkillCategory key={index} {...set} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
