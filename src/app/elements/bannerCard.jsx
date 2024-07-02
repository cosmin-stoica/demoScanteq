import React, { useState, useEffect } from "react";
import ItodoImage from "./itodo-img";

const BannerCard = ({ List, containerHeight, flip, imgLogo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        if (List.length > 1) {
            const interval = setInterval(() => {
                setShrink(true);
                setTimeout(() => {
                    setTimeout(() => {
                        setShrink(false);
                    }, List[currentIndex].fixedSeconds); // Utilizzo di List[currentIndex].fixedSeconds
                    setCurrentIndex(prevIndex => (prevIndex + 1) % List.length);
                }, List[currentIndex].transitionSeconds); // Utilizzo di List[currentIndex].transitionSeconds
            }, List[currentIndex].totalSeconds); // Utilizzo di List[currentIndex].totalSeconds
            return () => clearInterval(interval);
        }
    }, [List.length, currentIndex, List]);

    const { src, width, widthLower, color1, color2, colorBackGround, transitionSecondsCss } = List[currentIndex];



    return (
        <div className="banner-card-background" style={{
            backgroundColor: colorBackGround,
            transition: 'background-color 1s',
            flex: 1,
            height: containerHeight + 100,
            borderTopRightRadius: flip ? '0' : '50px',
            borderBottomRightRadius: flip ? '0' : '50px',
            borderTopLeftRadius: flip ? '50px' : '0',
            borderBottomLeftRadius: flip ? '50px' : '0',
        }}>
            <div className="banner-card-firstcircle" style={{ backgroundColor: color1, transition: 'background-color 1s' }}></div>
            <div className="banner-card-secondcircle" style={{ backgroundColor: color2, transition: 'background-color 1s' }}></div>
            {imgLogo && <ItodoImage className={flip ? "banner-card-logoimg-left" : "banner-card-logoimg-right"} src={imgLogo}></ItodoImage>}
            <ItodoImage
                className="banner-card-img"
                src={src}
                style={{
                    height: List.length > 1 && shrink ? widthLower : width,
                    transition: `height ${transitionSecondsCss}`,
                }}
            />
        </div>
    );
};

export default BannerCard;
