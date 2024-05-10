import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../globals/banner";

function BlogGridPage() {
    return (
        <>
            <Banner _data={bannerData.bloggrid} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b0 bg-white mobile-page-padding">
                {/* GALLERY CONTENT START */}
                <div className="container">
                    <div className="masonry-outer mfp-gallery news-grid clearfix row">
                        {/* COLUMNS 1 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic1.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 2 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic2.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 3 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic3.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 4 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic4.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 5 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic5.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 6 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic6.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 7 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic7.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 8 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic8.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 9 */}
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid/pic9.jpg" alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size of business agency kal Consulat Latest Management.</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sx-pagination-wra text-center">
                        <ul className="sx-pagination">
                            <li><a href="#"><span className="fa fa-long-arrow-left" /></a></li>
                            <li><a href="#">01</a></li>
                            <li className="active"><a href="#">02</a></li>
                            <li><a href="#">03</a></li>
                            <li><a href="#">04</a></li>
                            <li><a href="#"><span className="fa fa-long-arrow-right" /></a></li>
                        </ul>
                    </div>
                </div>
                {/* GALLERY CONTENT END */}
            </div>
            {/* SECTION CONTENT END  */}

            <SectionClients2 hideTitle={true}/>
        </>
    )
}
export default BlogGridPage;