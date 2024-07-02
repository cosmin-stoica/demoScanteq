import React, { useState, useEffect } from 'react';
import Magnifier from 'react-magnifier';
import { NavLink } from 'react-router-dom';

const NewHeaderTitle = ({ title, descList, buttonText, imgSrc, imgSrcRidimensionabile, imgSrcRidimensionabileBackground }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="new-header-div">

                <div className="new-header-div-first">
                    <div className="new-header-title">
                        {title}
                    </div>

                    <div className="new-header-desc">
                        {descList && descList.map((desc, index) => (
                            <p>{desc}</p>
                        ))}
                    </div>

                   <NavLink to="/contact-us"><button id="button-third">{buttonText}</button></NavLink>
                </div>
                {imgSrcRidimensionabile &&
                    <div className="new-header-div-second">
                        {windowWidth < 1200 ? (
                            <img src={imgSrc} width={500} />
                        ) : (
                            <Magnifier src={imgSrcRidimensionabile}
                                width={500}
                                mgWidth={300}
                                mgHeight={300}
                                zoomFactor={0.5}
                                mgShape="circle"
                                zoomImgSrc={imgSrcRidimensionabileBackground}
                            />
                        )}
                    </div>
                }
                {!imgSrcRidimensionabile &&
                    <div className="new-header-div-second">
                        <img src={imgSrc} width={500} />
                    </div>
                }

            </div>

        </>
    );
};

export default NewHeaderTitle;