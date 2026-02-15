import { useEffect } from 'react';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';

const About = () => {
    useEffect(() => {
        document.title = 'Chi Sono | Ludovico Barberis - Competenze ed Esperienze';
    }, []);

    return (
        <>
            <section className="section">
                <h1 className="text-large" style={{ marginBottom: '2rem' }}>About Me</h1>
                <p className="text-medium" style={{ maxWidth: '800px', opacity: 0.8 }}>
                    Sono un appassionato di tutta la tecnologia. Ho iniziato a programmare per far diventare la mia passione un lavoro.
                    Attualmente sono uno studente universitario di informatica, lavoro part-time per mettere in pratica le mie competenze. Nel tempo libero mi diverto a creare prototipi software, videogiocare e allenarmi nella corsa.
                </p>
            </section>
            <Experience />
            <Skills />
            <Education />
        </>
    );
};

export default About;
