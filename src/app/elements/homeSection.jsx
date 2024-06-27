import { NavLink } from "react-router-dom";
import ItodoImage from "./itodo-img";

const HomeSection = ({ title, descriptionList, buttonText, buttonLink, imgSrc, flip }) => {
    return (
        <div className={`home-section-div flip-column ${flip ? 'flip-row' : ''}`}>
            <div className="home-section-div-imgpart">
                <ItodoImage className={flip ? "home-section-img-principaleleft" : `home-section-img-principaleright`} src={imgSrc}></ItodoImage>
            </div>    
            <div className="home-section-div-textpart">
                <div className="home-section-div-textpart-title">
                    {title}
                </div>
                {descriptionList.map((desc, index) => (
                    <div key={index} className="home-section-div-textpart-desc">
                        {desc}
                    </div>
                ))}
                <div className="home-section-div-textpart-button">
                    <NavLink to={buttonLink}><button id="seemoreUpgrade" className="see-moreMAIM">{buttonText}</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
