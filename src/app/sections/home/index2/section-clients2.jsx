import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SectionClients2({ hideTitle }) {


    return (
      <>
                 <div className="section-full wow fadeInDown" data-wow-duration="1000ms">
        {/* TITLE START */}
        <div className="section-head center">
                        <div className="sx-head-s-title">Clienti</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">I nostri partner</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
          <div className="containerpartner">
                                        <ItodoImage id = "car3" src="images/clienti/tecno.png" alt="" />
                                        <ItodoImage id = "car4" src="images/clienti/miba.png" alt="" />
          </div>          

          <div className="sx-div-line" />
                        <div className="sx-div-line" />
                        <div className="sx-div-line" />

        <div id = "clientipane" className="section-full p-t110 p-b80 sx-client-logo-1-outer sx-bg-white">
        <div className="section-head center">
                        <div className="sx-head-l-title">
                        <div className="sx-head-s-title">Clienti</div>
                            <h2 className="sx-title">I nostri clienti finali</h2>
                        </div>
                    </div>
          <div className="container">
            {/* TITLE START */}
            {/* ... (rimuovi o mantieni il tuo codice HTML del titolo) */}
            {/* TITLE END */}
            <div className="section-content">
              <div className="client-grid m-b30">
                <div className="carousel-container"> {/* Aggiungi questa classe al container del carousel */}
                  <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    centerMode={true}
                    centerSlidePercentage={30}
                    autoPlay={true} // Abilita l'autoplay
                    interval={1500} // Imposta l'intervallo di tempo tra le diapositive (in millisecondi)
                  >
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage id = 'car2' src="images/clienti/sabelt.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/aras.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/cellino.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/gkn.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/iveco.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/komatsu.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/lamborghini.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/lear.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/proma.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage id =  "tristone" src="images/clienti/tristone.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/same.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                 <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/clienti/steparava.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </>
    );
  }
  
  export default SectionClients2;
  