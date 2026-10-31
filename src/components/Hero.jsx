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

const Hero = () => {
    return (
        <section>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <h1 className="page-title">Software developer e studente di informatica.</h1>
            <div className="prose">
                <p>
                    Sono uno studente di Informatica, qui mostro i miei prototipi, progetti e lavori.
                    Mi piace creare esperienze digitali con un focus su minimalismo, prestazioni e codice pulito.
                    La mia passione è risolvere problemi complessi con soluzioni semplici.
                </p>
            </div>
            <div className="social-row">
                <a href="https://github.com/Ludovico-B" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.8 1.6.3 2.8.1 3.2a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ludovico-barberis-85269921a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
                    </svg>
                </a>
                <a href="mailto:lubarbe01@gmail.com" aria-label="Email">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="m3 7 9 6 9-6"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
