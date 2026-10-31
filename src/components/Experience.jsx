const experiences = [
    {
        role: 'Junior Data Specialist',
        company: 'Sportway',
        start: '2025',
        end: 'Present',
        description: 'Analisi dei dati, reportistica e dashboarding. Creazione di prototipi e software per utilizzo interno. Gestione dei siti Web',
    },
    {
        role: 'Tecnico Smartphone & PC',
        company: 'PhoneLab',
        start: '2024',
        end: '2025',
        description: 'Assistenza tecnica su smartphone e PC, riparazioni hardware e software, gestione del magazzino e supporto clienti.',
    },
    {
        role: 'Impiegato Amministrativo',
        company: 'Groupe Seb Italia S.p.A. / Lagostina S.p.A.',
        start: '2022',
        end: '2024',
        description: 'Contabilità Fornitori, Elaborazione Intrastat, Gestione Fatturato Premi fine anno e Reportistica.',
    }
];

const Experience = () => {
    return (
        <section className="section">
            <h2 className="section-title">Esperienze</h2>
            <table className="work-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {experiences.map((exp) => (
                        <tr key={`${exp.company}-${exp.start}`}>
                            <td>
                                {exp.company}
                                <p className="work-desc">{exp.description}</p>
                            </td>
                            <td className="work-role">{exp.role}</td>
                            <td>
                                {exp.start}{' '}
                                {exp.end === 'Present' ? <span className="work-present">Present</span> : exp.end}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Experience;
