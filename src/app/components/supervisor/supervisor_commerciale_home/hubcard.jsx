
const HubCard = ({ zindex, icon, title, desc }) => {
    return (

        <div id={zindex} className="supervisor-category-card">
            <div className="supervisor-iconbox">
                <div className="orange-circle">
                    <i className={icon} />
                </div>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
};

export default HubCard;