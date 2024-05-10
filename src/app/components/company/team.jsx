import Banner from "../../sections/common/banner";
import ItodoImage from "../../elements/itodo-img";
import { bannerData } from "../../../globals/banner";
import { NavLink } from "react-router-dom";

function TeamPage() {
    return (
        <>
            <Banner _data={bannerData.team} />

            <div className="section-full p-t110 p-b80 sx-bg-light sx-ourteam-outer ">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Services</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">IT Solution Team Members</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="row sx-our-team-section">
                            {/*One block*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/1.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Michael Smith</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/2.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Delilah Brooklyn</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/3.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Leilani Kennedy</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One For*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/4.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Bella Natalia</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One FIve*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/5.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Michael Smith</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One Six*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/6.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Delilah Brooklyn</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One Seven*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/7.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Leilani Kennedy</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*One Eight*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/8.jpg" alt="" />
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/about-us">Bella Natalia</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

        </>
    )
}

export default TeamPage;