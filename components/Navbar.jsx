import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [pillStyle, setPillStyle] = React.useState({ left: 0, width: 0, opacity: 0 });
    const navRef = React.useRef(null);
    const linkRefs = React.useRef([]);

    // Add paths here
    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' }
    ];

    const activeIndex = links.findIndex(link => link.path === location.pathname);

    React.useEffect(() => {
        // Set initial position to active link
        if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
            const el = linkRefs.current[activeIndex];
            setPillStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1 // Keep opacity 1 to show active state
            });
        }
    }, [location.pathname, activeIndex]);

    const handleMouseEnter = (index) => {
        if (linkRefs.current[index]) {
            const el = linkRefs.current[index];
            setPillStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1
            });
        }
    };

    const handleMouseLeave = () => {
        // Return to active link
        if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
            const el = linkRefs.current[activeIndex];
            setPillStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1
            });
        } else {
            setPillStyle(prev => ({ ...prev, opacity: 0 }));
        }
    };

    return (
        <nav style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
                style={{ position: 'relative', display: 'flex', gap: '2rem' }}
                onMouseLeave={handleMouseLeave}
                ref={navRef}
            >
                {/* Background Pill */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: `${pillStyle.left}px`,
                        width: `${pillStyle.width}px`,
                        opacity: pillStyle.opacity,
                        backgroundColor: '#E5E5E5',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {links.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            ref={el => linkRefs.current[index] = el}
                            onMouseEnter={() => handleMouseEnter(index)}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                color: isActive ? '#000000' : '#666666',
                                padding: '0.5rem 1rem',
                                position: 'relative',
                                zIndex: 1,
                                transition: 'color 0.2s',
                            }}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
};

export default Navbar;
