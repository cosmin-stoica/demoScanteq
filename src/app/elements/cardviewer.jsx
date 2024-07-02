import React from "react";
import { NavLink } from "react-router-dom";

const CardViewer = ({ cards,buttonText,addClass,isFa }) => {
    return (
        <>
            <div className={`card-viewer-lower-part ${addClass}`}>
                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {cards.map((card, index) => (
                        <div key={index} className="card-viewer-lower-part-card">
                            <div className="orange-circle">
                                {isFa ? card.iconFa : <i className={card.icon}></i>}
                            </div>
                            <div className="card-viewer-lower-part-card-title">
                                {card.title}
                            </div>
                            <div className="card-viewer-lower-part-card-desc">
                                {card.desc}
                            </div>
                            {buttonText && <NavLink to={card.link}>
                                <span id="button-third" className="see-moreMAIM">{buttonText}</span>
                            </NavLink>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardViewer;
