import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import ItodoImage from "../../elements/itodo-img";
import SectionSidebar from "../../sections/IT blogs/sidebar/section-sidebar";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function BlogListSidebarPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.bloglistsidebar} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b0 mobile-page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            {/*one*/}
                            <div className="sx-latest-post-st-1 m-b50">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid-sidebar/pic1.jpg" alt="Image" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size business agency kal Consulat Latest Management.</NavLink></h4>
                                        <div className="sx-post-text">
                                            <p>Pellentesque sed urna odio. Donec auctor nunc ac libero commodo volutpat. Nullam massa nulla, dignissim non pretium eu, varius aliquet lacus. Maecenas tortor arcu, efficitur sit amet eleifend vel, interdum id nulla.</p>
                                        </div>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*two*/}
                            <div className="sx-latest-post-st-1 m-b50">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid-sidebar/pic2.jpg" alt="Image" /></NavLink>
                                    <NavLink to="/https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle-small">
                                        <i className="fa fa-play" />
                                    </NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size business agency kal Consulat Latest Management.</NavLink></h4>
                                        <div className="sx-post-text">
                                            <p>Pellentesque sed urna odio. Donec auctor nunc ac libero commodo volutpat. Nullam massa nulla, dignissim non pretium eu, varius aliquet lacus. Maecenas tortor arcu, efficitur sit amet eleifend vel, interdum id nulla.</p>
                                        </div>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*Three*/}
                            <div className="sx-latest-post-st-1 sx-no-image m-b50">
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size agency kal Consulat Latest Management.</NavLink></h4>
                                        <div className="sx-post-text">
                                            <p>Pellentesque sed urna odio. Donec auctor nunc ac libero commodo volutpat. Nullam massa nulla, dignissim
                                                lacus. Maecenas tortor arcu, efficitur sit amet eleifend vel, interdum id nulla.  Curabitur sem ligula, hendrerit ac mollis at, rutrum quis leo. Ut non augue id tortor consequat efficitur. Pellentesque porta nisl magna, sit amet scelerisque nisi aliquam et. Integer suscipit turpis at laoreet imperdiet.</p>
                                        </div>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*Four*/}
                            <div className="sx-latest-post-st-1 m-b50">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid-sidebar/pic3.jpg" alt="Image" /></NavLink>
                                    <NavLink to="/https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle-small">
                                        <i className="fa fa-play" />
                                    </NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size business agency kal Consulat Latest Management.</NavLink></h4>
                                        <div className="sx-post-text">
                                            <p>Pellentesque sed urna odio. Donec auctor nunc ac libero commodo volutpat. Nullam massa nulla, dignissim non pretium eu, varius aliquet lacus. Maecenas tortor arcu, efficitur sit amet eleifend vel, interdum id nulla.</p>
                                        </div>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*Five*/}
                            <div className="sx-latest-post-st-1 m-b50">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to="/blogs/detail"><ItodoImage src="images/blog/blog-grid-sidebar/pic4.jpg" alt="Image" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><NavLink to="/blogs/detail"><i className="fa fa-calendar" />01 Jan 2023</NavLink></li>
                                            <li className="post-author"><NavLink to="/blogs/detail"><i className="fa fa-comments" />0 Comments</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to="/blogs/detail">Standard size business agency kal Consulat Latest Management.</NavLink></h4>
                                        <div className="sx-post-text">
                                            <p>Pellentesque sed urna odio. Donec auctor nunc ac libero commodo volutpat. Nullam massa nulla, dignissim non pretium eu, varius aliquet lacus. Maecenas tortor arcu, efficitur sit amet eleifend vel, interdum id nulla.</p>
                                        </div>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to="/blogs/detail" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SIDE BAR START */}
                        <div className="col-xl-4 col-lg-4 col-md-12 sticky_column">
                            <SectionSidebar />
                        </div>
                        {/* SIDE BAR END */}
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}

            <SectionClients2 hideTitle={true} />
        </>
    )
}
export default BlogListSidebarPage;