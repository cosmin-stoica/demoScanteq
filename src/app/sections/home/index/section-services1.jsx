import { NavLink } from "react-router-dom";

function SectionServices1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Servizi</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Conoscenza sofisticata per una rapida evoluzione dei vostri servizi di automazione IT</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-our-services-bx">
                            <div className="row">
                                {/* Block one */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-monitor-1" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Project, Product Management</h4>
                                                <p>Gli esperti di Scanteq per prestazioni e affidabilità superiori nel tuo progetto.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-engineer" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Hardware Design</h4>
                                                <p>Esperti in elettronica, innovazione e affidabilità per il tuo progetto.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services" className="site-button-circle active">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-software-development" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Software,Firmware Design</h4>
                                                <p>Dalla comunicazione programmi-hardware alle soluzioni GUI avanzate.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="/services" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
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

export default SectionServices1;