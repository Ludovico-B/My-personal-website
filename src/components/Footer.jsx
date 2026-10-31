import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <p>© {new Date().getFullYear()} Ludovico Barberis.</p>
                <nav className="footer-links" aria-label="Link di piè di pagina">
                    <Link to="/about">About</Link>
                    <Link to="/gear">Gear</Link>
                    <a href="https://github.com/Ludovico-B" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ludovico-barberis-85269921a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
