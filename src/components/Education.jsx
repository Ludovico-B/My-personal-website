const education = [
    {
        degree: 'Informatica per le Aziende Digitali L-31',
        school: 'Università Telematica Pegaso',
        start: '2024',
        end: 'in corso',
        description: 'Laurea triennale in Informatica per le Aziende Digitali in fase di conseguimento.',
    },
    {
        degree: 'Certificato Web Graphic Specialist',
        school: 'Istituto Elvetico',
        start: '2023',
        end: '2024',
        description: 'Corso di specializzazione in programmazione Web e Grafica.',
    },
    {
        degree: 'Diploma di Amministrazione Finanza e Marketing',
        school: 'Istituto Dalla Chiesa Spinelli',
        start: '2016',
        end: '2021',
        description: 'Diploma di maturità economico-aziendale.',
    }
];

const Education = () => {
    return (
        <section className="section">
            <h2 className="section-title">Formazione</h2>
            <table className="work-table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {education.map((edu) => (
                        <tr key={edu.degree}>
                            <td>
                                {edu.school}
                                <p className="work-desc">{edu.description}</p>
                            </td>
                            <td className="work-role">{edu.degree}</td>
                            <td>
                                {edu.start}{' '}
                                {edu.end === 'in corso' ? <span className="work-present">in corso</span> : edu.end}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Education;
