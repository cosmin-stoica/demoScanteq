import React, { useState, useEffect } from "react";
import ItodoImage from "./itodo-img";

const BannerCard = ({ List }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShrink(true);
            setTimeout(() => {
                setTimeout(() => {
                    setShrink(false);
                }, fixedSeconds);
                setCurrentIndex(prevIndex => (prevIndex + 1) % List.length);
            }, transitionSeconds);
        }, totalSeconds);
        return () => clearInterval(interval);
    }, [List.length]);

    const { src, width, widthLower, color1, color2, colorBackGround, transitionSeconds, transitionSecondsCss, fixedSeconds, totalSeconds  } = List[currentIndex];

    return (
        <div className="banner-card-background" style={{ backgroundColor: colorBackGround, transition: 'background-color 1s' }}>
            <div className="banner-card-firstcircle" style={{ backgroundColor: color1, transition: 'background-color 1s' }}></div>
            <div className="banner-card-secondcircle" style={{ backgroundColor: color2, transition: 'background-color 1s' }}></div>
            <ItodoImage
                className="banner-card-img"
                src={src}
                style={{
                    width: shrink ? widthLower : width,
                    transition: `width ${transitionSecondsCss}`
                }}
            />
        </div>
    );
};

export default BannerCard;
