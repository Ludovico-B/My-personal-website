import React from 'react';

const ExperienceItem = ({ role, company, period, description }) => (
    <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h3 className="text-large">{role}</h3>
            <span className="text-small" style={{ fontFamily: 'monospace' }}>{period}</span>
        </div>
        <div className="text-medium" style={{ marginBottom: '0.5rem' }}>{company}</div>
        <p style={{ maxWidth: '700px', opacity: 0.8 }}>{description}</p>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: 'Data Analyst',
            company: 'Sportway',
            period: '2025 - Present',
            description: 'Analisi dei dati di vendita, reportistica, dashboarding e supporto alle decisioni di business. Creazione di prototipi e software per utilizzo interno.',
        },
        {
            role: 'Tecnico Smartphone e PC',
            company: 'PhoneLab',
            period: '2024 - 2025',
            description: 'Assistenza tecnica su smartphone e PC, riparazioni hardware e software, gestione del magazzino e supporto clienti.',
        },
        {
            role: 'Impiegato Amministrativo',
            company: 'Groupe Seb Italia S.p.A. / Lagostina S.p.A.',
            period: '2022 - 2024',
            description: 'Contabilità Fornitori, Elaborazione Intrastat, Gestione Fatturato Premi fine anno e Reportistica.',
        }
    ];

    return (
        <section className="section">
            <h2 className="text-large" style={{ marginBottom: '3rem', paddingBottom: '1rem' }}>
                Esperienze
            </h2>
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section >
    );
};

export default Experience;
