import Banner from "../../sections/common/banner";
import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";
import { bannerData } from "../../../globals/banner";

function GalleryPage() {
    return (
        <>
            <Banner _data={bannerData.gallery} />

            <div className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    {/* Filter Nav START */}
                   {/*} <div className="filter-navigation-wrap p-b30">
                        <ul className="filter-navigation masonry-filter clearfix">
                            <li className="active"><a className="btn-inline " data-filter="*" href="#" data-hover="All">All</a></li>
                            <li><a className=" btn-inline " data-filter=".cat-1" href="#">UX/UI</a></li>
                            <li><a className=" btn-inline " data-filter=".cat-2" href="#">HTML</a></li>
                            <li><a className=" btn-inline " data-filter=".cat-3" href="#">Wordpress</a></li>
                            <li><a className=" btn-inline " data-filter=".cat-4" href="#">Branding</a></li>
                            <li><a className=" btn-inline " data-filter=".cat-5" href="#">Photoshop</a></li>
                        </ul>
    </div> */}
                    {/* Filter Nav END */}
                    {/* GALLERY CONTENT START */}
                    <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled m-b0">
                        {/* COLUMNS 1 */}
                        <li className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/1.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/1.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/1.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 2 */}
                        <li className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/2.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/2.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/2.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 3 */}
                        <li className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/3.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/3.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/3.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 4 */}
                        <li className="masonry-item cat-4 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/4.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/4.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/4.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 5 */}
                        <li className="masonry-item cat-5 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/5.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/5.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/5.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 6 */}
                        <li className="masonry-item cat-4 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/6.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/6.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/6.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 7 */}
                        <li className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/7.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/7.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/7.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 8 */}
                        <li className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/8.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/8.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/8.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                        {/* COLUMNS 9 */}
                        <li className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="sx-gallery-block">
                                <div className="sx-gallery-media sx-img-overlay">
                                    <NavLink to="/portfolio/detail"><ItodoImage src="images/gallery/9.jpg" alt="" /></NavLink>
                                    <a href={publicUrlFor("images/gallery/9.jpg")} className="sx-gallery-link elem" data-lcl-txt="Regulatory Compliance System" data-lcl-author="someone" data-lcl-thumb={publicUrlFor("images/gallery/9.jpg")}><i className="flaticon-up-right-arrow" /></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* GALLERY CONTENT END */}
                    {/*Pagination*/}
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
                    {/*Pagination*/}
                </div>
            </div>

        </>
    )
}

export default GalleryPage;