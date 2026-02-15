import React from 'react';

const Hero = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ludovico Barberis",
        "jobTitle": "Software Developer & Data Analyst",
        "url": "https://ludovicobarberis.it",
        "sameAs": [
            "https://github.com/Ludovico-B",
            "https://www.linkedin.com/in/ludovico-barberis-85269921a/"
        ],
        "knowsAbout": ["JavaScript", "React", "Python", "SQL", "Data Analysis", "Web Development"]
    };

    return (
        <section className="section">
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <h1 className="text-huge" style={{ marginBottom: '1rem' }}>
                Ludovico Barberis
            </h1>
            <p className="text-large" style={{ marginBottom: '2rem', opacity: 0.8, fontWeight: 600 }}>
                Software Developer & Data Analyst
            </p>
            <p className="text-medium" style={{ maxWidth: '600px', lineHeight: '1.4' }}>
                Sono uno studente di Informatica, qui mostro i miei prototipi, progetti e lavori. Mi piace creare esperienze digitali con un focus su minimalismo, prestazioni e codice pulito. La mia passione è risolvere problemi complessi con soluzioni semplici.
            </p>
        </section>
    );
};

export default Hero;
