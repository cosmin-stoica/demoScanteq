import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";

function SectionTeam2() {
    return (
        <>
            <div className="section-full p-t110 sx-bg-light sx-ourteam-outer" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-team.jpg")})` }}>
                <div className="container">
                    {/* TITLE START */}
                    {/*Large Title*/}
                    <div className="large-title-block sx-all-white">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div className="section-head left">
                                    <div className="sx-head-s-title">Team Member</div>
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">Our Itodo IT Solution Special Team Members</h2>
                                    </div>
                                </div>
                                {/* TITLE END */}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" large-title-info">
                                    <p>Nunc tempor ultrices iaculis. Cras suscipit odio ut neque interdum, sed faucibus lorem feugiat.
                                        tincidunt tellus quis iaculis interdum. Donec a lobortis arcu. Fusce viverra a dolor quis tincidunt. Pellentesque vitae diam sodales nisl dapibus finibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="owl-carousel sx-our-team-carousel m-b110">
                            {/*One block*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/1.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Michael Smith</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*two block*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/2.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Delilah Brooklyn</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*three block*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/3.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Leilani Kennedy</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*Four block*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/4.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Bella Natalia</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*five block*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/1.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Michael Smith</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*six two*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/2.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Delilah Brooklyn</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*seven three*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/3.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Leilani Kennedy</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                            {/*eight For*/}
                            <div className="item">
                                <div className="our-team-2 white">
                                    <div className="profile-image">
                                        <ItodoImage src="images/our-team5/4.jpg" alt=""/>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                                            <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-dribbble" /></a>
                                            <a href="https://twitter.com/"><i className="fa fa-behance" /></a>
                                        </div>
                                    </div>
                                    <div className="figcaption">
                                        <p>Managing Director</p>
                                        <h4 className="sx-title"><NavLink to="/team">Bella Natalia</NavLink></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OUR CLIENTS */}
                <div className="sx-client-logo-3-wrap">
                    <div className="sx-bg-white sx-bg-batten" />
                    <div className="container">
                        <div className="sx-bg-primary sx-client-logo-3-outer">
                            <div className="client-logo-pic3-wrap">
                                <div className="row  grid-5">
                                    <div className="col-lg-2 col-md-4 col-sm-4">
                                        <NavLink to="/contact-us" className="client-logo-pic2">
                                            <ItodoImage src="images/client-logo/white/client-logo-1.png" alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4">
                                        <NavLink to="/contact-us" className="client-logo-pic2">
                                            <ItodoImage src="images/client-logo/white/client-logo-2.png" alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4">
                                        <NavLink to="/contact-us" className="client-logo-pic2">
                                            <ItodoImage src="images/client-logo/white/client-logo-3.png" alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4">
                                        <NavLink to="/contact-us" className="client-logo-pic2">
                                            <ItodoImage src="images/client-logo/white/client-logo-5.png" alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4">
                                        <NavLink to="/contact-us" className="client-logo-pic2">
                                            <ItodoImage src="images/client-logo/white/client-logo-4.png" alt=""/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OUR CLIENTS END */}
            </div>
        </>
    )
}

export default SectionTeam2;