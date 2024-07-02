import { NavLink } from "react-router-dom";
import React, { useRef, useEffect, useState } from 'react';
import ItodoImage from "./itodo-img";
import BannerCard from "./bannerCard";

const HomeSection = ({ title, descriptionList, buttonText, buttonLink, imgSrc, imgSrcList, flip, putBackground, backgroundColor, imgLogo  }) => {
    const textPartRef = useRef(null);
    const [textPartHeight, setTextPartHeight] = useState(0);

    const updateTextPartHeight = () => {
        if (textPartRef.current) {
            setTextPartHeight(textPartRef.current.clientHeight);
        }
    };
    useEffect(() => {
        updateTextPartHeight();
        window.addEventListener('resize', updateTextPartHeight);
        return () => window.removeEventListener('resize', updateTextPartHeight);
    }, [title, descriptionList, buttonText]);


    return (
        <div className={`home-section-div flip-column ${flip ? 'flip-row' : ''}`} style={{backgroundColor: backgroundColor}}>
            {!putBackground && imgSrc && (
                <div className="home-section-div-imgpart">
                    <ItodoImage className={flip ? "home-section-img-principaleleft" : "home-section-img-principaleright"} src={imgSrc}></ItodoImage>
                </div>
            )}
            {putBackground && imgSrcList && <BannerCard List={imgSrcList} containerHeight={textPartHeight} flip={flip} imgLogo={imgLogo}/>}
            <div className="home-section-div-textpart" ref={textPartRef}>
                {title && <div className="home-section-div-textpart-title">{title}</div>}
                {descriptionList && descriptionList.map((desc, index) => (
                    <div key={index} className="home-section-div-textpart-desc">{desc}</div>
                ))}
                {buttonText && (
                    <div className="home-section-div-textpart-button">
                        <NavLink to={buttonLink}>
                            <button id="button-third" className="see-moreMAIM">{buttonText}</button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeSection;
