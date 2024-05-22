import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-our-info-outer ">
                <div className="container">
                    <div className="section-content">
                        <div className="row sx-our-info-content-wrap">
                            {/*One block*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Area di interesse</span>
                                                <h3 className="sx-bx-title">Automazione</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Automazione</span>
                                                <h3 className="sx-bx-title">Industriale</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Automazione</span>
                                                <h3 className="sx-bx-title">D'Ufficio</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-media-wrap">
                                    <div className="sx-our-info-media">
                                        <ItodoImage src="images/our-info.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                    <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Esperienza</span>
                                                <h3 className="sx-bx-title">14+ Anni d'esperienza</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Contatti</span>
                                                <h3 className="sx-bx-title">info@scanteq.com
                                                    +39 327 5875936</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Location</span>
                                                <h3 className="sx-bx-title">Via XXIV Maggio 28 10024, Moncalieri (TO)  Italy</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionOurInfo2;