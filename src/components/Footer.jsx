import { ArrowUpRight } from 'lucide-react';

const FooterLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--footer-bg)',
            borderRadius: '9999px',
            color: 'var(--footer-text)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid transparent'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--footer-hover)';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.borderColor = 'var(--footer-border)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--footer-bg)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'transparent';
        }}
    >
        {children}
        <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
    </a>
);

const Footer = () => {
    return (
        <footer className="section" style={{ paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
                <h2 className="text-medium">Contatti</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <FooterLink href="mailto:lubarbe01@gmail.com">Email</FooterLink>
                    <FooterLink href="https://github.com/Ludovico-B">GitHub</FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/ludovico-barberis-85269921a/">LinkedIn</FooterLink>
                </div>
            </div>
            <div style={{ marginTop: '2rem', fontSize: '0.875rem', opacity: 0.5 }}>
                © {new Date().getFullYear()} Ludovico Barberis. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
