import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gear', label: 'Gear' },
];

const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    const current = links.find((link) => link.path === location.pathname) || links[0];

    useEffect(() => {
        const onPointerDown = (event) => {
            if (wrapRef.current && !wrapRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link to="/" className="avatar" aria-label="Home">
                    LB
                </Link>
                <div className="header-actions">
                    <div className="nav-wrap" ref={wrapRef}>
                        <button
                            type="button"
                            className="nav-pill"
                            aria-expanded={open}
                            aria-haspopup="true"
                            onClick={() => setOpen((value) => !value)}
                        >
                            {current.label}
                            <ChevronDown size={16} />
                        </button>
                        {open && (
                            <nav className="nav-menu" aria-label="Navigazione principale">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        aria-current={location.pathname === link.path ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
