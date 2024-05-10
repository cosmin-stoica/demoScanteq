import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials2 from "./section-testimonials2";

export function SectionWhyChooseUs2Inner() {
    return (
        <>
            <div className="row">
            <h1 className="TitoloCapitolo">Perchè sceglierci per il tuo prodotto</h1>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-media">
                        <div className="sx-ab4-img-outer">
                            <div className="sx-ab4-media">
                                <ItodoImage src="images/about/p3.jpg" alt="media" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx3-content">
                        <p>Scegli Scanteq per oltre un decennio di expertise nell'automazione industriale e d'ufficio. <br></br>La nostra comprovata esperienza e costante impegno per l'innovazione garantiscono soluzioni su misura per migliorare il tuo successo.</p>
                    
                        <ul id="ulprodotto" className="sx-arrow-circle-checked">
                            <li  id="ulprodotto" >Eccellenza tecnica</li>
                            <li>Esperienza comprovata</li>
                            <li>Innovazione continua</li>
                            <li>Personalizzazione delle soluzioni</li>
                            <li>Supporto clienti proattivo</li>
                            <li>Costi competitivi</li>
                        </ul>
                        {/* <NavLink to="/why-choose-us" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa  fa-long-arrow-right" />
                            Vedi tutto
    </NavLink> */}
                    </div>
                </div>
            </div>
        </>
    )
}

function SectionWhyChooseUs2() {
    return (
        <>
            <div id = "perche" className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
                <div  className="container">
                    <div className="section-content">
                        <div className="sx-about-bx4-content-wrap p-b70">
                            <SectionWhyChooseUs2Inner />
                        </div>
                        {/*testimonial section */}
                    </div>
                </div>
         </div>
        </>
    )
}

export default SectionWhyChooseUs2;