import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionLatestNews() {
    return (
        <>
            <div className="widget  recent-posts-entry">
                <h4 className="widget-title  ">Latest News</h4>
                <div className="section-content">
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic1.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><NavLink to="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                        <li className="post-author"><NavLink to="/services/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="/services/detail">Standard of business agency kal Consulat Latest Management.</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic2.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><NavLink to="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                        <li className="post-author"><NavLink to="/services/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="/services/detail">Standard of business agency kal Consulat Latest Management.</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic3.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><NavLink to="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                        <li className="post-author"><NavLink to="/services/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="/services/detail">Standard of business agency kal Consulat Latest Management.</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionLatestNews;