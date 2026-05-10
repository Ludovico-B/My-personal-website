import React, { useState } from 'react';

const GearCard = ({ title, description, link, image }) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem',
                borderRadius: '16px',
                backgroundColor: 'var(--card-bg)',
                transition: 'background-color 0.2s ease',
            }}
        >
            {/* Image / Icon */}
            <div style={{ flexShrink: 0 }}>
                {image ? (
                    <img 
                        src={image} 
                        alt={title} 
                        style={{ 
                            width: '72px', 
                            height: '72px', 
                            borderRadius: '18px', 
                            objectFit: 'cover',
                            border: '1px solid var(--card-border)'
                        }} 
                    />
                ) : (
                    <div style={{ 
                        width: '72px', 
                        height: '72px', 
                        borderRadius: '18px', 
                        backgroundColor: 'var(--placeholder-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--card-border)'
                    }}>
                        <span style={{ opacity: 0.3, fontSize: '0.8rem', color: 'var(--text-color)' }}>Img</span>
                    </div>
                )}
            </div>
            
            {/* Text Content */}
            <div style={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.05rem', 
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {title}
                </h3>
                <p style={{ 
                    margin: 0, 
                    fontSize: '0.9rem', 
                    color: 'var(--text-muted)', 
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {description}
                </p>
            </div>

            {/* "Get" Button Link */}
            <div style={{ flexShrink: 0, marginLeft: '0.5rem' }}>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '999px',
                        backgroundColor: isButtonHovered ? 'var(--btn-bg-hover)' : 'var(--btn-bg)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--btn-text)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                    }}
                >
                    Get
                </a>
            </div>
        </div>
    );
};

export default GearCard;
