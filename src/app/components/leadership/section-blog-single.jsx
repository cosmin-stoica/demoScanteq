import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function SectionBlogSingle() {

    const { t } = useTranslation("leadership");

    return (
        <>
            <div className="blog-single-space">
                {/* BLOG START */}
                <div className="sx-post-media sx-img-effect img-reflection m-b30">
                    <NavLink to="/blogs/detail-with-sidebar"><ItodoImage className="valentinleader" src="images/our-team5/1.jpg" alt="Image" /></NavLink>
                </div>
                <div className="single-blog-post blog-detail m-b30">
                    {/*<div className="sx-post-meta ">
                        <ul>
                            <li className="post-date"><NavLink to="/blogs/detail-with-sidebar"><i className="fa fa-calendar" />05 Jan 2023</NavLink></li>
                            <li className="post-author"><NavLink to="/blogs/detail-with-sidebar"><i className="fa fa-comments" />0 Comments</NavLink></li>
                        </ul>
                    </div>*/}
                    <div className="sx-post-title ">
                        <h2 className="post-title">{t("header")}</h2>
                    </div>

                    <div className="sx-post-text normalfont">
                        <p>
                            {t("desc_1")}
                        </p>
                        <p>
                            {t("desc_2")}
                        </p>
                        <p>
                            {t("desc_3")}
                        </p>
                        <p>
                            {t("desc_4")}
                        </p>
                        <p>
                            {t("desc_5")}
                        </p>
                        <p>
                            {t("desc_6")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBlogSingle;