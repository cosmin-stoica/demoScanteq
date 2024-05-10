import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";

function Banner({_data}) {
    return (
        <>
            <div className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center" style={{ backgroundImage: `url(${publicUrlFor(_data.background)})` }}>
                <div className="overlay-main bg-white opacity-0" />
                <div className="container">
                    <div className="sx-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <span className="sx-bnr-sm-title">sezione</span>
                                <h2 className="sx-title">{_data.title}</h2>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="sx-breadcrumb breadcrumb-style-2">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li>{_data.crumb}</li>
                                </ul>
                            </div>
                            {/* BREADCRUMB ROW END */}
                        </div>
                    </div>
                </div>
                <div className="sx-bnr-outline-text">
                    <h1> {_data.watermark}</h1>
                </div>
            </div>
        </>
    )
}

export default Banner;