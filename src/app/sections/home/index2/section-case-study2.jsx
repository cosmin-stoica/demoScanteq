import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionCaseStudy2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-white sx-case-study2-outer">
                <div id = "ufficioim" className="container">
                    {/*Large Title*/}
                    <div className="large-title-block">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div id="sium" className="section-head left">
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">Immagini acquisite</h2>
                                    </div>
                                </div>
                                {/* TITLE END */}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" large-title-info">
                                    <p>Sono di seguito mostrate alcune immagini acquisite con lo scanner scAn4 della Musa Srl, equipaggiato con la scheda Imagina.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sium2"className="section-content">

                <div className="primariga">
                    <img className="fotoriga" src = "/assets/images/case-study/4.jpg" alt = ""></img>
                    <div className="colonna">
                    <img className="foto1" src = "/assets/images/case-study/euro50.jpg" alt = ""></img>
                    <img className="foto2" src = "/assets/images/case-study/2.jpg" alt = ""></img>
                    <img className="foto3" src = "/assets/images/case-study/3.jpg" alt = ""></img>
                    </div>
                </div>

                <div className="secondariga">
                    <img className= "foto5" src = "/assets/images/case-study/5.jpg" alt = ""></img>
                    <img className= "foto6" src = "/assets/images/case-study/6.jpg" alt = ""></img>
                </div>

                </div>
                {/*<div className="section-content ">
                    <div className="sx-case-study-bx2-wrap">
                        


                        <div className="row m-b30">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/6.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="images/case-study/6.jpg" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                </div>
                            </div>
    */}
                            {/*One*/}{/*
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/1.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>

                                </div>
</div> */}
                            {/*two*/} {/*
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 ">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/2.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    
                                </div>
</div> */}
                            {/*three*/} {/*
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/3.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/hardware-solutions" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    
                                </div>
                            </div>*/}
                            {/*four*/} {/*
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 ">
                                <div id = "foto4" className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/4.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    
                                </div>
                            </div>*/}
                            {/*five*/}{/*
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study/5.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/schede-hardware" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>*
                    </div>
                </div>*/}
            </div>
        </>
    )
}

export default SectionCaseStudy2;