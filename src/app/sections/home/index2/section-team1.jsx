import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionTeam1() {
    return (
        <>
            <div id="leadershipcont" className="section-full p-t110 p-b80 sx-bg-light sx-ourteam-outer ">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Leadership</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">La nostra leadership</h2>
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
    </div>
    <div className="textleader">
        <div className="description-container">
            <p>Il Dott. Valentin Drogoreanu, fondatore di Scanteq, ha una solida formazione accademica e una carriera di successo nel settore dell'ingegneria elettronica. Da ricercatore universitario a esperto nell'acquisizione di immagini, il suo percorso lo ha portato a diventare l'amministratore delegato di Scanteq, guidando l'azienda nella produzione di sistemi innovativi per l'acquisizione di immagini e l'automazione industriale.</p>
        </div>
    </div>
</div>

<div className="figcaption">
    <p>Amministratore Delegato</p>
    <h4 className="sx-title"><NavLink to="/leadership">Valentin Drogoreanu</NavLink></h4>
    <div className="sx-p-table-bx-2-bottom">
        <NavLink to="/leadership" title="READ MORE" rel="bookmark" className="site-button icon">
            <i className="fa fa-long-arrow-right" />Vedi di più
        </NavLink>
    </div>
</div>
                            </div>
                            {/*One two*/}
                            {/*<div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
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
    </div> */}
                            {/*One three*/}
                            {/*<div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
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
                            </div> */}
                            {/*One For*/} 
                            {/*<div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team-2">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTeam1;