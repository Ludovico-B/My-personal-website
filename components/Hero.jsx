import React from 'react';

const Hero = () => {
    return (
        <section className="section">
            <h1 className="text-huge" style={{ marginBottom: '1rem' }}>
                Ludovico Barberis
            </h1>
            <h2 className="text-large" style={{ marginBottom: '2rem', opacity: 0.8 }}>
                Software Developer
            </h2>
            <p className="text-medium" style={{ maxWidth: '600px', lineHeight: '1.4' }}>
                Sono uno studente di Informatica, qui mostro i miei prototipi, progetti e lavori. Mi piace creare esperienze digitali con un focus su minimalismo, prestazioni e codice pulito. La mia passione è risolvere problemi complessi con soluzioni semplici.
            </p>
        </section>
    );
};

export default Hero;
