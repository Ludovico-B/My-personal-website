const GearCard = ({ title, description, link, image }) => {
    const content = (
        <>
            {image ? (
                <img src={image} alt="" />
            ) : (
                <div className="gear-fallback" />
            )}
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );

    if (link && link !== '#') {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="gear-item">
                {content}
            </a>
        );
    }

    return <div className="gear-item">{content}</div>;
};

export default GearCard;
