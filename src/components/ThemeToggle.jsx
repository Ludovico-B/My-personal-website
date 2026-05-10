import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

// Icona Sole (Light)
const SunIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

// Icona Luna (Dark)
const MoonIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

// Icona Monitor (System)
const MonitorIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
);

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Gestione chiusura cliccando fuori
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Determina l'icona attiva basata sul tema attualmente renderizzato
    const activeIcon = () => {
        if (theme === 'system') {
            // Controlla preferenza di sistema per mostrare sole/luna corretto sul bottone, o sempre il monitor
            // Nel caso del bottone, possiamo mostrare il monitor o il sole/luna attuale. Scegliamo di mostrare il monitor se "system"
            return <MonitorIcon size={20} />;
        }
        return theme === 'dark' ? <MoonIcon size={20} /> : <SunIcon size={20} />;
    };

    const handleSelect = (selectedTheme) => {
        setTheme(selectedTheme);
        setIsOpen(false);
    };

    return (
        <div className="theme-toggle-container" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-color)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--nav-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Toggle theme"
            >
                {activeIcon()}
            </button>

            {isOpen && (
                <div 
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '0.5rem',
                        background: 'var(--bg-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        zIndex: 50,
                        minWidth: '140px',
                        // Glassmorphism effect
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        backgroundColor: 'color-mix(in srgb, var(--bg-color) 80%, transparent)'
                    }}
                >
                    {[
                        { id: 'light', label: 'Chiaro', icon: <SunIcon size={16} /> },
                        { id: 'dark', label: 'Scuro', icon: <MoonIcon size={16} /> },
                        { id: 'system', label: 'Sistema', icon: <MonitorIcon size={16} /> }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleSelect(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.5rem 0.75rem',
                                border: 'none',
                                background: theme === item.id ? 'var(--nav-bg)' : 'transparent',
                                color: 'var(--text-color)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'background-color 0.2s',
                                textAlign: 'left',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                if (theme !== item.id) e.currentTarget.style.backgroundColor = 'var(--card-hover)';
                            }}
                            onMouseLeave={(e) => {
                                if (theme !== item.id) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;
