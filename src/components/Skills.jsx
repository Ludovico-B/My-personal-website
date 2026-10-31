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

const Skills = () => {
    return (
        <section className="section">
            <h2 className="section-title">Skills</h2>
            {skillSets.map((set) => (
                <div className="skill-block" key={set.title}>
                    <h3>{set.title}</h3>
                    <p>{set.skills.join(', ')}</p>
                </div>
            ))}
        </section>
    );
};

export default Skills;
