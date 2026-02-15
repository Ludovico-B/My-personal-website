import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
    useEffect(() => {
        document.title = 'Ludovico Barberis | Software Developer Portfolio';
    }, []);

    return (
        <>
            <Hero />
            <ProjectGrid />
        </>
    );
};

export default Home;
