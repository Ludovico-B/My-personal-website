import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Ludovico Barberis | Software Developer Portfolio</title>
                <meta name="description" content="Benvenuti nel portfolio di Ludovico Barberis. Esplora i miei progetti software, dai web scheduler ai sistemi di machine learning." />
                <link rel="canonical" href="https://ludovicobarberis.it/" />
            </Helmet>
            <Hero />
            <ProjectGrid />
        </>
    );
};

export default Home;
