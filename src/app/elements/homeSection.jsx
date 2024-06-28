import { NavLink } from "react-router-dom";
import ItodoImage from "./itodo-img";
import BannerCard from "./bannerCard";

const HomeSection = ({ title, descriptionList, buttonText, buttonLink, imgSrc, imgSrcList, flip, putBackground }) => {
    return (
        <div className={`home-section-div flip-column ${flip ? 'flip-row' : ''}`}>
            {!putBackground && imgSrc && <div className="home-section-div-imgpart">
                <ItodoImage className={flip ? "home-section-img-principaleleft" : `home-section-img-principaleright`} src={imgSrc}></ItodoImage>
            </div>}
            {putBackground && imgSrcList &&
                <BannerCard List={imgSrcList}></BannerCard>
            }
            <div className="home-section-div-textpart">
                {title && <div className="home-section-div-textpart-title">
                    {title}
                </div>}
                {descriptionList && descriptionList.map((desc, index) => (
                    <div key={index} className="home-section-div-textpart-desc">
                        {desc}
                    </div>
                ))}
                {buttonText && <div className="home-section-div-textpart-button">
                    <NavLink to={buttonLink}><button id="seemoreUpgrade" className="see-moreMAIM">{buttonText}</button></NavLink>
                </div>}
            </div>
        </div>
    );
};

export default HomeSection;
