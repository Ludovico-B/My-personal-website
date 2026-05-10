import React, { useEffect } from 'react';
import GearCard from '../components/GearCard';

const Gear = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const gearItems = [
        // Desk Setup
        {
            title: 'MacBook Air M3 13"',
            description: 'Il mio portatile principale per lo sviluppo e l\'analisi dati.',
            tags: ['Computer', 'Apple'],
            link: 'https://www.apple.com/macbook-air/',
            image: '/img/macbook-air.png',
            category: 'Desk Setup'
        },
        {
            title: 'ASUS TUF Gaming VG328H1B 31.5"',
            description: 'Monitor con un alto refresh rate e una bassa latenza. Perfetto per gaming e programmazione.',
            tags: ['Display'],
            link: 'https://www.asus.com/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg328h1b/',
            image: '/img/monitor-asus-tuf.png',
            category: 'Desk Setup'
        },
        {
            title: 'Logitech MX Keys Mini',
            description: 'Tastiera compatta e reattiva, perfetta per sessioni di programmazione.',
            tags: ['Periferiche'],
            link: 'https://www.logitech.com/it-it/products/keyboards/mx-keys-mini.html',
            image: '/img/logitech-mx-keys-mini.png',
            category: 'Desk Setup'
        },
        {
            title: 'Logitech Mouse Lift',
            description: 'Mouse ergonomico per alleviare lo stress del polso.',
            tags: ['Periferiche'],
            link: 'https://www.logitech.com/it-it/products/keyboards/mx-keys-mini.html',
            image: '/img/logi-mouse-lift.png',
            category: 'Desk Setup'
        },
        // App Setup
        {
            title: 'Antigravity',
            description: 'L\'IDE di Google AI, perfetto per lo sviluppo e l\'analisi dati.',
            tags: ['IDE', 'Sviluppo'],
            link: 'https://antigravity.google/',
            image: '/img/antigravity-logo.jpeg',
            category: 'App Setup'
        },
        {
            title: 'Notion',
            description: 'Per prendere appunti, gestire i progetti e organizzare le idee.',
            tags: ['Produttività'],
            link: 'https://www.notion.so/',
            image: '/img/notion-logo.png',
            category: 'App Setup'
        },
        {
            title: 'Apple Music',
            description: 'Per ascoltare musica durante le sessioni di deep work.',
            tags: ['Musica'],
            link: 'https://www.apple.com/apple-music/',
            image: '/img/apple-music-logo.png',
            category: 'App Setup'
        },
        {
            title: 'Github',
            description: 'Per archiviare i miei progetti e collaborare con altri sviluppatori.',
            tags: ['Software'],
            link: 'https://www.github.com/',
            image: '/img/github-logo.png',
            category: 'App Setup'
        },
        // AI
        {
            title: 'Perplexity',
            description: 'Il mio motore di ricerca potenziato dall\'AI per ricerche veloci e verificate.',
            tags: ['AI', 'Search'],
            link: 'https://www.perplexity.ai/',
            image: '/img/perplexity-logo.png',
            category: 'AI'
        },
        {
            title: 'Nano Banana App',
            description: 'Strumento incredibile per la generazione di immagini e ispirazione visuale.',
            tags: ['AI', 'Design'],
            link: 'https://www.nanobanana.app/',
            image: '/img/nanobanana-logo.png',
            category: 'AI'
        },
        {
            title: 'Opencode Terminal',
            description: 'Un terminale potenziato dall\'IA per l\'automazione di compiti complessi.',
            tags: ['AI', 'Sviluppo'],
            link: 'https://opencode.com/',
            image: '/img/opencode-logo.png',
            category: 'AI'
        },
        {
            title: 'Kuse Coworking',
            description: 'Il mio agente AI personale per gestire la mia produttività quotidiana.',
            tags: ['AI', 'Sviluppo'],
            link: 'https://kuse.it/',
            image: '/img/kuse-coworking-logo.png',
            category: 'AI'
        },
        // Everyday carry
        {
            title: 'iPhone 17',
            description: 'Sempre con me per gestire le comunicazioni e testare i siti mobile.',
            tags: ['Smartphone'],
            link: '#',
            image: '/img/iphone-17.png',
            category: 'Everyday carry'
        },
        {
            title: 'iPad Air 11\" M1',
            description: 'Un tablet potente e versatile per prendere appunti.',
            tags: ['Tablet'],
            link: 'https://www.apple.com/it/ipad-air/',
            image: '/img/ipad-air.png',
            category: 'Everyday carry'
        },
        {
            title: 'AirPods 4th Gen Noise Cancelling',
            description: 'Cancellazione del rumore essenziale per concentrarsi ovunque.',
            tags: ['Audio'],
            link: 'https://www.apple.com/it/airpods-4th-gen-noise-cancelling/',
            image: '/img/airpods-4.png',
            category: 'Everyday carry'
        },
        {
            title: 'Apple Watch SE 2nd Gen',
            description: 'Il mio smartwatch per monitorare l\'allenamento e gestire le notifiche.',
            tags: ['Smartwatch', 'Apple'],
            link: 'https://www.apple.com/it/airpods-4th-gen-noise-cancelling/',
            image: '/img/apple-watch.png',
            category: 'Everyday carry'
        },
        {
            title: 'Cotopaxi Allpa Mini 20L',
            description: 'Zaino minimale e resistente per trasportare il mio setup.',
            tags: ['Borsa'],
            link: 'https://eu.cotopaxi.com/it/products/rucksack-allpa-mini-20l-travel-pack-del-dia?srsltid=AfmBOop5YnVyKnbjEjXSRv9rp4hCaqcvvLyuUMF77spTiul68y5p-lDe',
            image: '/img/zaino-cotopaxi.png',
            category: 'Everyday carry'
        }
    ];

    const deskSetup = gearItems.filter(item => item.category === 'Desk Setup');
    const appSetup = gearItems.filter(item => item.category === 'App Setup');
    const aiSetup = gearItems.filter(item => item.category === 'AI');
    const everydayCarry = gearItems.filter(item => item.category === 'Everyday carry');

    return (
        <div style={{ paddingTop: '2rem' }}>
            {/* Header */}
            <section style={{ marginBottom: '4rem' }}>
                <h1 className="text-large" style={{ marginBottom: '1rem' }}>Gear</h1>
                <p className="text-medium" style={{ opacity: 0.8, maxWidth: '800px', lineHeight: '1.4' }}>
                    Gli strumenti che utilizzo ogni giorno per lavorare, sviluppare e rimanere produttivo.
                    Questa è una lista curata del mio setup personale.
                </p>
            </section>

            {/* Desk Setup Section */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 className="text-medium" style={{ marginBottom: '2rem', fontWeight: 600 }}>
                    Desk Setup
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
                    {deskSetup.map((item, index) => (
                        <GearCard key={`desk-${index}`} {...item} />
                    ))}
                </div>
            </section>

            {/* App Setup Section */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 className="text-medium" style={{ marginBottom: '2rem', fontWeight: 600 }}>
                    App Setup
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
                    {appSetup.map((item, index) => (
                        <GearCard key={`app-${index}`} {...item} />
                    ))}
                </div>
            </section>

            {/* AI Section */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 className="text-medium" style={{ marginBottom: '2rem', fontWeight: 600 }}>
                    AI Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
                    {aiSetup.map((item, index) => (
                        <GearCard key={`ai-${index}`} {...item} />
                    ))}
                </div>
            </section>

            {/* Everyday Carry Section */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 className="text-medium" style={{ marginBottom: '2rem', fontWeight: 600 }}>
                    Everyday carry
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
                    {everydayCarry.map((item, index) => (
                        <GearCard key={`edc-${index}`} {...item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gear;
