import React from 'react';

const EducationItem = ({ degree, school, period, description }) => (
    <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h3 className="text-large" style={{ fontSize: '1.5rem' }}>{degree}</h3>
            <span className="text-small" style={{ fontFamily: 'monospace' }}>{period}</span>
        </div>
        <div className="text-medium" style={{ marginBottom: '0.5rem' }}>{school}</div>
        {description && <p style={{ maxWidth: '700px', opacity: 0.8 }}>{description}</p>}
    </div>
);

const Education = () => {
    const education = [
        {
            degree: 'Informatica per le Aziende Digitali L-31',
            school: 'Università Telematica Pegaso',
            period: '2024 - in corso',
            description: 'Laurea triennale in Informatica per le Aziende Digitali in fase di conseguimento.',
        },
        {
            degree: 'Certificato Web Graphic Specialist',
            school: 'Istituto Elvetico',
            period: '2023 - 2024',
            description: 'Corso di specializzazione in programmazione Web e Grafica.',
        },
        {
            degree: 'Diploma di Amministrazione Finanza e Marketing',
            school: 'Istituto Dalla Chiesa Spinelli',
            period: '2016 - 2021',
            description: 'Diploma di maturità economico-aziendale.',
        }
    ];

    return (
        <section className="section">
            <h2 className="text-large" style={{ marginBottom: '3rem', paddingBottom: '1rem' }}>
                Formazione
            </h2>
            <div>
                {education.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
};

export default Education;
