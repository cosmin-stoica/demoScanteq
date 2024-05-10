import { NavLink } from "react-router-dom";

function SectionCategories() {
    return (
        <>
            <div className="widget widget_services ">
                <h4 className="widget-title">Contatti</h4>
                <ul className="bgs-white">
                    <li> <a className="sx-case-link"><i className="flaticon-email-1" /></a>
                        <NavLink to="/contact-us">Email<span> valentin.drogoreanu@scanteq.com</span></NavLink></li>
                        <li> <a className="sx-case-link"><i className="flaticon-incoming-call" /></a>
                        <NavLink to="/contact-us">Phone<span> +39 327 5875963</span></NavLink></li>
                </ul>
            </div>
        </>
    )
}
export default SectionCategories;