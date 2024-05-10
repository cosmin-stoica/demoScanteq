import CountUp from "react-countup";

function SectionCounter1() {
    return (
        <>
            <div className="counter-blocks">
                <div className="row when-item-four">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="sx-count">
                            <h2 className="sx-title">
                                <span className="sx-cont-before">+</span>
                                <span className="counter">
                                    <CountUp end={12} duration={10} />
                                </span>
                                <span className="sx-cont-after">K</span>
                            </h2>
                            <div className="sx-count-info">Our Active Member</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="sx-count">
                            <h2 className="sx-title">
                                <span className="sx-cont-before">+</span>
                                <span className="counter">
                                    <CountUp decimals={1} end={1.5} duration={10} />
                                </span>
                                <span className="sx-cont-after">K</span>
                            </h2>
                            <div className="sx-count-info">Our Total Project</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="sx-count">
                            <h2 className="sx-title">
                                <span className="sx-cont-before">+</span>
                                <span className="counter">
                                    <CountUp end={14} duration={8} />
                                </span>
                            </h2>
                            <div className="sx-count-info">Our Winning Award</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="sx-count">
                            <h2 className="sx-title">
                                <span className="sx-cont-before">+</span>
                                <span className="counter">
                                    <CountUp end={50} duration={10} />
                                </span>
                            </h2>
                            <div className="sx-count-info">Our Team Member</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCounter1;