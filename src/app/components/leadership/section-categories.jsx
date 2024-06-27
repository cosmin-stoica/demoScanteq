import { NavLink } from "react-router-dom";

function SectionCategories() {
    return (
        <>
            <div className="widget widget_services ">
                <h4 className="widget-title">Contatti</h4>
                <ul className="bgs-white ">
                    <li className="font-primary"> <a className="sx-case-link font-primary"><i className="flaticon-email-1 font-primary" /></a>
                        <NavLink className="font-primary" to="/contact-us">
                            Email
                            <span className="font-primary"> valentin.drogoreanu@scanteq.com</span>
                        </NavLink>
                    </li>
                    <li className="font-primary"> <a className="sx-case-link font-primary"><i className="flaticon-incoming-call font-primary" /></a>
                        <NavLink className="font-primary" to="/contact-us">
                            Phone
                            <span className="font-primary"> +39 327 5875963</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SectionCategories;