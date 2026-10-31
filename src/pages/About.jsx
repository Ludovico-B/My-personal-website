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
            <section>
                <h1 className="page-title">Sono un appassionato di tutta la tecnologia.</h1>
                <div className="prose">
                    <p>
                        Ho iniziato a programmare per far diventare la mia passione un lavoro.
                        Attualmente sono uno studente universitario di informatica, lavoro part-time per mettere in pratica le mie competenze.
                    </p>
                    <p>
                        Nel tempo libero mi diverto a creare prototipi software, videogiocare e allenarmi nella corsa.
                    </p>
                </div>
            </section>
            <Experience />
            <Skills />
            <Education />
        </>
    );
};

export default About;
