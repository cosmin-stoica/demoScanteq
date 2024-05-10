import { NavLink } from "react-router-dom";
import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";

function SectionServices3() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-why-choose2-outer sx-bg-light" style={{ backgroundImage: `url(${publicUrlFor("images/services/bg-img.jpg")})` }}>
                <div className="container">
                    {/*Large Title*/}
                    <div className="large-title-block sx-all-white">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div className="section-head left">
                                    <div className="sx-head-s-title">Our Services</div>
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">What We Are Expart At Our Special Services.</h2>
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
                    <div className="section-content">
                        <div className="owl-carousel sx-why-choose-carousel2 m-b30">
                            {/*One block*/}
                            <div className="item">
                                <div className="sx-service-bx-2">
                                    <div className="sx-icon-box-wraper">
                                        <div className="sx-img-bx">
                                            <span className="sx-img-bx-media">
                                                <ItodoImage src="images/services/images/pic-1.jpg" alt="image" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <NavLink to="/services/detail" className="sx-why-ch-category">It Solutions</NavLink>
                                            <NavLink to="/services/detail"><h4 className="sx-tilte">Analytic Solutions</h4></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="item">
                                <div className="sx-service-bx-2">
                                    <div className="sx-icon-box-wraper">
                                        <div className="sx-img-bx">
                                            <span className="sx-img-bx-media">
                                                <ItodoImage src="images/services/images/pic-2.jpg" alt="image" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <NavLink to="/services/detail" className="sx-why-ch-category">Real Specialist</NavLink>
                                            <NavLink to="/services/detail"><h4 className="sx-tilte">Business Planning</h4></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="item">
                                <div className="sx-service-bx-2">
                                    <div className="sx-icon-box-wraper">
                                        <div className="sx-img-bx">
                                            <span className="sx-img-bx-media">
                                                <ItodoImage src="images/services/images/pic-3.jpg" alt="image" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <NavLink to="/services/detail" className="sx-why-ch-category">Time Saving</NavLink>
                                            <NavLink to="/services/detail"><h4 className="sx-tilte">Company Accounting</h4></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionServices3;